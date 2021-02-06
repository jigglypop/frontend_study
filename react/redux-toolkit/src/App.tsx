import { useDispatch, useSelector } from "react-redux";
import { CounterState, increase, decrease } from './modules/counter'

function App() {
  const count = useSelector((state: CounterState) => state.count);
  const dispatch = useDispatch();
  
  const onIncrease = () =>{
    dispatch(increase())
  }
  const onDecrease = () =>{
    dispatch(decrease())
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => onIncrease()}>+1</button>
      <button onClick={() => onDecrease()}>-1</button>
    </div>
  );
}

export default App;
