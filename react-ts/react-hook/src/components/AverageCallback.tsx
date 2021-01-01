import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'

const getAverage = (numbers: number[])=> {
    console.log('callback 평균값 계산중')
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b)
    return sum / numbers.length
}

export default function AverageCallback() {
    const [list, setList] = useState<number[]>([])
    const [number, setNumber] = useState<string>('');

    const onChange = useCallback(
        (e : ChangeEvent<HTMLInputElement>) =>{
            setNumber(e.target.value);
        },[])
    const onInsert = useCallback(() =>{
        const nextList = list.concat(parseInt(number))
        setList(nextList)
        setNumber('')
    },[number, list])
    const avg = useMemo(()=>getAverage(list),[list])
    return (
        <div>
            <h1>Average Callback</h1>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
            </ul>
            <div>
            <b>평균 값:</b> {avg}
            </div>
        </div>
    )
}
