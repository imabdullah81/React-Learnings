import { useState, useCallback } from 'react';

export default function Callback() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []); // function is saved and reused

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
      <p>{count}</p>
    </>
  );
}

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Child Button</button>;
}
