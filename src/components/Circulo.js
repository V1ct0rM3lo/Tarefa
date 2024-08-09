import React, { useState } from 'react';

function AreaCirculo() {
  const [raio, setRaio] = useState(0);
  const [area, setArea] = useState(0);

  const calcularArea = () => {
    setArea(Math.PI * Math.pow(raio, 2));
  };

  return (
    <div>
      <input
        type="number"
        value={raio}
        onChange={(e) => setRaio(Number(e.target.value))}
        placeholder="Digite o raio"
      />
      <button onClick={calcularArea}>Calcular Área</button>
      <p>Área: {area}</p>
    </div>
  );
}

export default AreaCirculo;
