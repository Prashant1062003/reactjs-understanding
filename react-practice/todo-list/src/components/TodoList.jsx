import React from 'react'



function TodoList({tasks, delteTask}) {
    
  return (
    <div>
        <ul>
            {tasks.map((task, id) => (
                <li key={id}>
                    {task} 
                    <button onClick={()=>delteTask(id)}>Delete</button>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default TodoList