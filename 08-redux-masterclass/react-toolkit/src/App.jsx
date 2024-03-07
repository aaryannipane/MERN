import { useSelector } from 'react-redux';
import './App.css';
import { Account } from './components/Account';
import { Bonus } from './components/Bonus';
import { Admin } from './components/Admin';

function App() {
  // here state.`account` is same as name given in slice
  const account = useSelector((state)=> state.account);
  const bonus = useSelector((state)=> state.bonus);
  return (
    <div className='App'>
      <div style={{color:"black", background: "#eee", border: "2px solid black"}}>
        <h1>store --&gt; state, reducer, dispatch</h1>
      </div>
      <h1>Amount: {account.amount}</h1>
      <h1>Point: {bonus.point}</h1>

      <hr />
      <Account/>
      <hr />
      <Bonus/>
      <hr />
      <Admin/>
    </div>
  );
}

export default App;
