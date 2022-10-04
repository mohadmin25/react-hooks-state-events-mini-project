

import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({ text: "", category: "code" });

  // making the form function to add value and name  to the task by using the spread method
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // making the submit function and adding item
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categories.map((category) => (
            <option key={category}> {category} </option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;