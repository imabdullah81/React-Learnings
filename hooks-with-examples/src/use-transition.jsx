import { useState, useTransition } from 'react';

export default function Transition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    startTransition(() => {
      setInput(value);
    });
  };

  return (
    <div>
      <input onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <p>You typed: {input}</p>
    </div>
  );
}
