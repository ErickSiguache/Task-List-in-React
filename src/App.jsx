import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Container";
import { getTasks, insertTasks } from "./services/task-service";
import { notifySuccess } from "./utils/toast-types";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadSavedTasks = () => {
    const saved = getTasks();
    if (saved) setTasks(JSON.parse(saved));
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const setTasksAndSave = (newTasks) => {
    setTasks(newTasks);
    insertTasks(newTasks);
  };

  const addTask = (taskTitle) => {
    const nonRepeatedTasks = tasks.filter((task) => task.title === taskTitle);
    if (nonRepeatedTasks) throw new Error("La tarea ha insertar ya existe");

    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTaskById = (taskId) => {
    const tasksWithoutDeleted = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(tasksWithoutDeleted);
    notifySuccess("La tarea ha sido eliminada.");
  };

  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  };

  return (
    <>
      <Header titleApp={"Mi lista de tareas"} handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}

export default App;
