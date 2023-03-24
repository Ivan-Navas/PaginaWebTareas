import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/Taskcontext";
import '../styles/taskList.css'
const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="ifNo">No hay tareas</h1>;
  }
  return (
    <div className="mainContainer" >
      {tasks.map((task) => (
        <div >
          <div className="secundaryContainer">
            <TaskCard 
            key={task.id} task={task} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TaskList;
