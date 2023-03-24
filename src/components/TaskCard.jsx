import { useContext } from "react";
import {TaskContext} from '../context/Taskcontext';
import '../styles/taskCard.css';

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext);
  return (
    <div className="taskcard">
      <h2 className="titleTask">{task.title}</h2>
      <p>{task.description}</p>
      <div className="buttonContainer">
        <button onClick={() => deleteTask(task.id)}
        className="deleteButton"
        >Eliminar Tarea</button>
      </div>
    </div>
  );
}

export default TaskCard;
