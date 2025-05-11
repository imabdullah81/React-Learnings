import { useState,useMemo } from "react";
const expensiveCalculation = (num) => {
  console.log('Calculating...');
  return num * 2;
};

export default function Memo() {
  const [count, setCount] = useState(0);
  const double = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}
