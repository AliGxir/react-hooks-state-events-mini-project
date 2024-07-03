import React, { useState } from "react";
import { string, object } from 'yup';

const projectSchema = object({
  text: string().required("Please fill out!"),
  category: string().required("Please fill out!"),
})

const initialState = {text: "", category: ""}

const NewTaskForm = ({categories, onTaskFormSubmit}) => {
  const [formData, setFormData] = useState(initialState)

  // const changeForm = (e) => {
  //   setFormData(current => ({...current, [e.target.name] : e.target.value }))
  // }
  // Updater function won't work on objects in state, so the above doesn't work
  // https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state
  const changeForm = (e) => {
    setFormData({ ...formData, [e.target.name] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(formData)
    }

    return (
      <form className="new-task-form" onSubmit={handleSubmit}>
        <label>
          Details
          <input type="text" name="text" value={formData.text} onChange={changeForm} required/>
        </label>
        <label>
          Category
          <select name="category" value={formData.category} onChange={changeForm} required>  
            <option value="" >Select a Category</option>
            {categories.map(category => {
              return category !== "All" ? <option key={category} value={category}>{category}</option> : null
            })} 
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    );
}

export default NewTaskForm;
