import React, { useContext } from "react";
import { useState } from "react";
import {TaskContext} from '../context/Taskcontext'
import '../styles/taskForm.css'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle('')
    setDescription('')
  };

  return (
    <form onSubmit={handleSubmit}
    className="taskForm">
      <input className="input" required
        placeholder="Nombre de la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea className="textarea" required
        placeholder="Descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className="button">Guardar</button>
    </form>
  );
}

export default TaskForm;
