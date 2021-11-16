
import './App.css';
import DynamicComponents from './components/DynamicComponents';
import { num, setOfTx, limitOfTx } from './problem1';

function App() {
  return (
    <div className="App">
      <h1>Problem1 데이터 가져오기</h1>
      <DynamicComponents num = {num} setOfTx = {setOfTx} limitOfTx = {limitOfTx}></DynamicComponents>
    </div>
  );
}


export default App;
