import React from "react";
import { FaTrash } from "react-icons/fa";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div
      className="flex justify-between items-center bg-gray-800 text-white p-3 rounded hover:bg-gray-700 transition"
    >
      <div
        className={`cursor-pointer flex-1 ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-3 text-red-400 hover:text-red-600"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default TodoItem;
