import React, { useRef, useState, useEffect } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);

  const stateRenderCount = useState(0)[0]; // Just to demonstrate, we won't update it
  const refRenderCount = useRef(0);

  // Update refRenderCount on every render
  refRenderCount.current += 1;

  return (
    <div className="p-4 max-w-md mx-auto mt-10 bg-gray-900 text-white rounded">
      <h2 className="text-xl font-bold mb-4">🔄 Render Counter Demo</h2>

      <p>🧠 Current count (state): {count}</p>
      <p>📦 Renders tracked with <code>useRef</code>: {refRenderCount.current}</p>
      <p>📦 Renders tracked with <code>useState</code>: {stateRenderCount}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
      >
        ➕ Increment State
      </button>
    </div>
  );
}

export default RenderCounter;
