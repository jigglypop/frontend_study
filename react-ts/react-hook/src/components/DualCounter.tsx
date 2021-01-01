import React, { useState } from 'react'

interface CountButtonProps {
  onClick :() => void;
  count : number
}

function CountButton({ onClick, count }:CountButtonProps) {
    console.log('CountButton 렌더링')
    return <button onClick={onClick}>{count}</button>;
  }

  export default function DualCounter() {
    const [count1, setCount1] = useState(0);
    const increment1 = () => setCount1(c => c + 1)
    const [count2, setCount2] = useState(0);
    const increment2 = () => setCount2(c => c + 1)
    return (
        <>
        <h1>CountButton</h1>
        <CountButton count={count1} onClick={increment1} />
        <CountButton count={count2} onClick={increment2} />
        </>
    );
}
