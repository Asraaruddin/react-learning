import { useState, useRef, useEffect } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus input on mount
  }, []);

  const handleAdd = () => {
    if (!input.trim()) return;
    onAdd(input);
    setInput('');
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
