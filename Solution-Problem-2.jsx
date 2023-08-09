import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [prevState, setPrevState] = useState(count);

  useEffect(() => {
    setPrevState(count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Previous State: {prevState}</p>
      <p>Current State: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;