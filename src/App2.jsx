import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// adding to an array with input change and on form submit, populating an array
// clearing input

function App() {
  const [newItem, setNewItem] = useState("")

  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("")
  }


  return (
    <>
      <h1>Svjat's React</h1>
      <form onSubmit={handleSubmit} className="new-item-form">
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
      <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
        <p key={todo.id}>{todo.title}</p> 
        )
      })}
    </ul>
    </>
  )
}

export default App
