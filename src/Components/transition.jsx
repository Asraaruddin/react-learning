import React, { useState, useTransition } from 'react';

 export function FilterList({ list }) {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState(list);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const result = list.filter(item => item.includes(value));
      setFiltered(result);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filtered.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
