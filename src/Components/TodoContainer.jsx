import { useState, useEffect } from "react";
import TodoInput from "./todoinput";
import TodoList from './TodoList';

function  TodoContainer (){
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
      });
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);


const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };
  

const deleteTodo = (id)=> {
setTodos(todos.filter(todo => todo.id !== id))
}

const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
    return(
        <div className="max-w-md mx-auto mt-10 p-4 bg-gray-900 rounded shadow">
            <h2 className="text-2xl font-bold text-white mb-4">My To-Do List</h2>
            <TodoInput onAdd={addTodo} />

           
            <TodoList todos={todos} onDelete={deleteTodo} />

        </div>
    );
}
export default TodoContainer;