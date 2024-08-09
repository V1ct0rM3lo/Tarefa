import React, { useState } from 'react';

function QuilometrosParaMilhas() {
  const [quilometros, setQuilometros] = useState(0);
  const [milhas, setMilhas] = useState(0);

  const converter = () => {
    setMilhas(quilometros * 0.621371);
  };

  return (
    <div>
      <input
        type="number"
        value={quilometros}
        onChange={(e) => setQuilometros(Number(e.target.value))}
        placeholder="Digite o valor em quilômetros"
      />
      <button onClick={converter}>Converter para Milhas</button>
      <p>Valor em milhas: {milhas}</p>
    </div>
  );
}

export default QuilometrosParaMilhas;
