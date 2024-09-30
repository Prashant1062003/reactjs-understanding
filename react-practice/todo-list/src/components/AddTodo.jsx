import React, { useState } from 'react'



function AddTodo({addTask}) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()){
            addTask(task);
            setTask('');
        }
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Add a new task'
            onChange={(e) => setTask(e.target.value)}
            />
            
            <button type="submit">Add New Task</button>
        </form>
    </div>
  )
}

export default AddTodo