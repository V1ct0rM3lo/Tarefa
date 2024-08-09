import React, { useState } from 'react';



function CelsiusParaFahrenheit() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const converter = () => {
    setFahrenheit(celsius * 9/5 + 32);
  };

  return (
    <div>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(Number(e.target.value))}
        placeholder="Digite a temperatura em Celsius"
      />
      <button onClick={converter}>Converter para Fahrenheit</button>
      <p>Temperatura em Fahrenheit: {fahrenheit}</p>
    </div>
  );
}

export default CelsiusParaFahrenheit;
