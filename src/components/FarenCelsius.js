import React, { useState } from 'react';

function FahrenheitParaCelsius() {
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celsius, setCelsius] = useState(0);

  const converter = () => {
    setCelsius((fahrenheit - 32) * 5/9);
  };

  return (
    <div>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(Number(e.target.value))}
        placeholder="Digite a temperatura em Fahrenheit"
      />
      <button onClick={converter}>Converter para Celsius</button>
      <p>Temperatura em Celsius: {celsius}</p>
    </div>
  );
}

export default FahrenheitParaCelsius;
