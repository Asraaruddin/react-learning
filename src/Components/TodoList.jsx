import React, { useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa";



function TodoList({ todos, onDelete }) {
  const lastTodoRef = useRef();

  useEffect(()=>{
    if(lastTodoRef.current){
      lastTodoRef.current.scrollIntoView({behavior:"smooth"})
    }
  },[todos]);
  return (
    <ul className="space-y-2">
      {todos.map((todo,index) => (
       <li
       key={todo.id}
       ref={index === todos.length - 1 ? lastTodoRef : null}
       className="bg-gray-700 text-white px-4 py-2 rounded-lg flex justify-between items-center shadow-sm">
     
          <span> {todo.text}</span>
          <button
  onClick={() => onDelete(todo.id)}
  className="text-pink-500 hover:text-pink-700 transition"
>
<FaTrash/>
</button>

        </li>
      ))}
    </ul>
  );
}

export default TodoList;
