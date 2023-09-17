import { Task } from "../Task";
import "./container.css";

export function Tasks({ tasks, onDelete, onComplete }) {
  const taskTotal = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="container">
      <header className="header-container">
        <section>
          <p className="textPurple">Tareas completadas</p>
          <span>
            {completedTasks} de {taskTotal}
          </span>
        </section>
      </header>

      <section className="list-container">
        {taskTotal > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))
        ) : (
          <h4 className="message-container">
            No hay tareas en este momento :)
          </h4>
        )}
      </section>
    </section>
  );
}
