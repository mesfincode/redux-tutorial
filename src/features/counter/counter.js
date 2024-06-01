import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmouint] = useState(1);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <div>
        <input type='number' onChange={(e)=>setAmouint(e.target.value)} />
        <button onClick={()=>dispatch(incrementByAmount(Number(amount)))}>Incrment By {amount}</button>

      </div>
    </div>
  )
}