import "./header.css";
import { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { textValidator } from "../../utils/text-type-validators";
import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../../utils/toast-types";

export function Header({ titleApp, handleAddTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const data = textValidator(title);
      handleAddTask(data);
      setTitle("");
      notifySuccess("La tarea fue agregada exitosamente.");
    } catch (error) {
      notifyError(error.message);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <header className="header">
      <h1> {titleApp} </h1>
      <form onSubmit={handleSubmit} className="taskForm">
        <input
          placeholder="Agregar una nueva tarea"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button className="button-style">
          Crear <AiOutlinePlusSquare size={20} />
        </button>
        <ToastContainer />
      </form>
    </header>
  );
}
