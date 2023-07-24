import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 

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

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed : completed}
        }

        return todo
      })
    })
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
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)}
              />
             {todo.title}
            </label>
          </li> 
        )
      })}
    </ul>
    </>
  )
}

export default App
