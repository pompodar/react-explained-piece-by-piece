import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// input value to p using useState, e.target.value, onChange
// onCLick

function App() {
  const [count, setCount] = useState(0)

  const [newItem, setNewItem] = useState("")


  return (
    <>
      <h1>Svjat's React</h1>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} {newItem}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
