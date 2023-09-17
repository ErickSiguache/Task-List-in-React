import "./task.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className="task">
      <button className="checkContainer" onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>

      <button className="deleteButton" onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
