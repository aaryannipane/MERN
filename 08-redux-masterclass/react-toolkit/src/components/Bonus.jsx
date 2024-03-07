import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/slice/bonusSlice";

export const Bonus = () => {
    const dispatch = useDispatch()
    const bonus = useSelector((state)=> state.bonus);
  return (
    <div>
      <h1>Bonus</h1>
      <p>points: {bonus.point}</p>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
    </div>
  );
};
