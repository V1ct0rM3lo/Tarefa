import React, { useState } from 'react';

function MetrosParaCentimetros() {
  const [metros, setMetros] = useState(0);
  const [centimetros, setCentimetros] = useState(0);

  const converter = () => {
    setCentimetros(metros * 100);
  };

  return (
    <div>
      <input
        type="number"
        value={metros}
        onChange={(e) => setMetros(Number(e.target.value))}
        placeholder="Digite o valor em metros"
      />
      <button onClick={converter}>Converter para Centímetros</button>
      <p>Valor em centímetros: {centimetros}</p>
    </div>
  );
}

export default MetrosParaCentimetros;
