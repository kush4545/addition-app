import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumberChange = (e, setNumber) => {
    setNumber(parseInt(e.target.value, 10));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  return (
    <div>
      <h1>Addition App</h1>
      <input
        type="number"
        value={number1}
        onChange={(e) => handleNumberChange(e, setNumber1)}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => handleNumberChange(e, setNumber2)}
      />
      <button onClick={handleAddition}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
