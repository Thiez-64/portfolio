import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, signIn, inputfield } from "../redux/actions";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const loggin = useSelector((state) => state.loggin);
  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>welcome</h3> : <h3>blabla</h3>}
      <button onClick={() => dispatch(signIn())}>Click</button>
      <input
        type="text"
        onSubmit={(e) => dispatch(inputfield(e.target.value))}
      />
      <p>{loggin}</p>
    </div>
  );
}
