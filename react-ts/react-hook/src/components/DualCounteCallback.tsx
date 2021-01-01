import React, { memo, useCallback, useState } from 'react'

interface CountButtonProps {
  onClick :() => void;
  count : number
}
// useMemo와 useCallback을 사용해야하는 시점Permalink
// useMemo와 useCallback을 사용해야하는 상황을 두 가지로 표현하고 있습니다.

// 참조 동일성(Referential equality)
// 고비용의 복잡한 연산
// 참조 동일성Permalink
// 참조 동일성의 경우 레퍼런스를 비교하는 상황을 말합니다. non-primitive type 일 경우 레퍼런스로 비교를 하게 되는데 객체 내부의 값은 같더라도 그 레퍼런스가 다르게 되는 경우에도 렌더링이 발생하는 상황을 막고 싶을 때 사용해야한다는 의미입니다.


const CountButton = memo(function CountButton({ onClick, count } : CountButtonProps) {
  console.log('CountButton memo 렌더링')
  return <button onClick={onClick}>{count}</button>;
});

  export default function DualCounteCallback() {
    const [count1, setCount1] = useState(0);
    const increment1 = useCallback(() => setCount1(c => c + 1), []);
    const [count2, setCount2] = useState(0);
    const increment2 = useCallback(() => setCount2(c => c + 1), []);

    
    return (
        <>
        <h1>CountButton</h1>
        <CountButton count={count1} onClick={increment1} />
        <CountButton count={count2} onClick={increment2} />
        </>
    );
}
