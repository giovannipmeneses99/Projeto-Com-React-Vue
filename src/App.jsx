import { useState } from 'react'
import './App.css'

function App() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (!newTask.trim()) return
    setTasks([...tasks, newTask])
    setNewTask("")
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className="todo-container react">
      <h2>📘 Lista de Tarefas</h2>
      <div className="input-box">
        <input 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Nova tarefa..." 
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <span onClick={() => removeTask(i)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App