import { useState } from "react";

function TodoInput({onAddTodo}){
    const [input,setInput] = useState('');

    const handleAdd = () =>{
        if(!input.trim()) return ;
        onAddTodo(input);
        setInput('');
    };
    return(
        <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
    )

}
export default TodoInput