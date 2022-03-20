import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        Count value is {count}
        <br />

        <button class="button1" onClick = {() => setCount(count + 1)}> ADD ME </button>
        <button class="button2" onClick = {() => setCount(count - 1)}> SUBTRACT ME </button>
    </div>
  )
}
