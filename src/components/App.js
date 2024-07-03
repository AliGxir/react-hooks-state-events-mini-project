import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {v4 as uuidv4} from "uuid";

import { CATEGORIES, TASKS } from "../data";

const taskWithId = TASKS.map(task => ({...task, id: uuidv4()}))

const App = () => {

  const [selectCategory, setSelectCategory] = useState("All")
  const [selectTasks, setSelectTasks] = useState(taskWithId)

  const handleClick = (e) => {
    setSelectCategory(e.target.value)
  }
 
  const handleDelete = (id) => {
    setSelectTasks(current => current.filter(task => task.id !== id))
  }

  const onTaskFormSubmit = (newTask) => {
    setSelectTasks(current => [...current, newTask])
  }

  return ( 
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick} selectCategory={selectCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={selectTasks} selectCategory={selectCategory} handleDelete={handleDelete} />
    </div>
  )
}

export default App;
