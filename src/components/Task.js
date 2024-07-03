import React from "react";

const Task = ({category, text, id, handleDelete}) => {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(id)} >X</button>
    </div>
  );
}

export default Task;