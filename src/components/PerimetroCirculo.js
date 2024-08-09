import React, { useState } from 'react';

function PerimetroCirculo() {
  const [raio, setRaio] = useState(0);
  const [perimetro, setPerimetro] = useState(0);

  const calcularPerimetro = () => {
    setPerimetro(2 * Math.PI * raio);
  };

  return (
    <div>
      <input
        type="number"
        value={raio}
        onChange={(e) => setRaio(Number(e.target.value))}
        placeholder="Digite o raio"
      />
      <button onClick={calcularPerimetro}>Calcular Perímetro</button>
      <p>Perímetro: {perimetro}</p>
    </div>
  );
}

export default PerimetroCirculo;
