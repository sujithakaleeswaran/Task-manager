import React, { useState } from 'react'

export default function TaskForm({addTask}) {
    const [task,setTask] = useState('');
    const [priority,setPriority] = useState('Medium')
    // const [category,setCategory] =useState("ShowAll")
    const handlesubmit =(e)=>
    {  
      e.preventDefault();
      addTask({text:task,priority,completed:false})
      setTask('');
      setPriority("Medium")
    }
  return (
    
       <form onSubmit={handlesubmit} className='task-form'>
        <div id="inp">
            <input type='text' placeholder='Enter the task' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <span><button type='submit'>Add Task</button></span>
        </div>
        <div id="btns">
       
<select value={priority} onChange={(e)=>setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
</select> 
        </div>
       </form>
  )
}
