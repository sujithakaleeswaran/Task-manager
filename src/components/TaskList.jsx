import React from 'react'

export default function TaskList({tasks,updateTask,deleteTask}) {
  const togglecomplete =(index)=>{
    const updatedTask ={...tasks[index],completed: !tasks[index].completed};
    updateTask(updatedTask,index);
  }
  return (
   <ul className='task-list'>
     {tasks.map((task,index)=>(
      <li key={index}>
        <div>
          <span>{task.text}</span>
          <small>{task.priority}</small>
        </div>
        <div>
          <button onClick={()=>togglecomplete(index)}
          >{task.completed ? "undo": "complete" }</button>
          <button onClick={()=>deleteTask(index)}>delete</button>
        </div>
      </li>
     ))}
   </ul>
  )
}
