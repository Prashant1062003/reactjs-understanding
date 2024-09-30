import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask (task){
    setTasks([...tasks, task])
    localStorage.setItem("tasks", JSON.stringify(setTasks([...tasks, task])))
  }
  function delteTask (id) {
    //here we use filter(_,i) "_"underscore represents the element itself which we don't care what it is so we just use its index i.e. "i" then we compare this i to id of delete button and if they are not equal to each other filter return true then this will work like as we want i.e. we got a newTasks which has no value with index(id).
    const newTasks = tasks.filter((_,i) => i !== id); 
    setTasks(newTasks);
  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodo addTask={addTask} />
      <TodoList tasks={tasks} delteTask={delteTask}/>
    </>
  )
}

export default App
