import React from "react";
import { useState,useEffect } from "react";

export default function Effect() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query === '') return;

    const timeout = setTimeout(() => {
      fetch(`https://api.example.com/search?q=${query}`)
        .then(res => res.json())
        .then(data => setResults(data));
    }, 500); // debounce

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {results.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  );
}
