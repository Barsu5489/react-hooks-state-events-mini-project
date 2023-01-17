import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  console.log('s')
  console.log(tasks)
  return (
    <div className="tasks">
      { tasks.map((tasks,index)=>{

return(<Task text={tasks.text} category = {tasks.category}key={index}/>)    
 
  
   })}
    </div>
  );
}

export default TaskList;
