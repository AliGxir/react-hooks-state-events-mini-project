import React from "react";
import Task from "./Task";

const TaskList = ({tasks, selectCategory, handleDelete}) => {
  const filteredTasks = tasks.filter(task => !selectCategory || selectCategory === "All" || task.category === selectCategory)
 
  return (
    <div className="tasks"> 
    {filteredTasks.map(taskObj => (
    <Task key={taskObj.id || taskObj.text} {...taskObj} handleDelete={handleDelete} />
  ))}
  </div>
  )
}

export default TaskList;
