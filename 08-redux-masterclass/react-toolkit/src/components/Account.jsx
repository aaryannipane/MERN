import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, fetchUserAmountById } from "../store/slice/accountSlice";


export const Account = () => {
    const dispatch = useDispatch()
    const account = useSelector((state)=> state.account);
    const [amount, setAmount] = useState(null);
  return (
    <div>
      <h1>Account</h1>
      <p>ammount: {account.amount}</p>

      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="insert ammount to increment"/>
      <button onClick={()=> dispatch(incrementByAmount(amount))}>increment by value</button>
      <button onClick={()=> dispatch(fetchUserAmountById(1))}>Get user account amount</button>
    </div>
  );
};
