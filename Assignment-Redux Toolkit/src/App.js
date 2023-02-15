import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Counter'
import './App.css'

export default function App() {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App' >
      <h1>Count: {count}</h1>
      <div>
        <button className='ui button' onClick={() => dispatch(increment())}>Increment</button>
        <button className='ui button' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}