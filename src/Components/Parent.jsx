import { useState } from 'react'
import Demo from './Demo'

function Parent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Parent Component</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Demo count={count} />
    </div>
  )
}

export default Parent
