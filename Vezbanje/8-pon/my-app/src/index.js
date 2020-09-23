import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { v1 as uuidv1 } from 'uuid';const Todo = ({ todo }) => {
  return (
    <p>{todo.task} -- {todo.done + ''}</p>
  )
}
const App = () => {
  const [todos,setTodos] = useState([])
  const [text,setText] = useState('') 
   return (
    <>
      <input onInput={(e) => {
        setText(e.target.value)
      }} />
      <button>Додај</button>
      {todos.map(el => <Todo key={el.id} todo={el} />)}
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)