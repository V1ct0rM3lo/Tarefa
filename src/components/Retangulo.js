import React, { useState } from 'react';

function AreaRetangulo() {
  const [largura, setLargura] = useState(0);
  const [altura, setAltura] = useState(0);
  const [area, setArea] = useState(0);

  const calcularArea = () => {
    setArea(largura * altura);
  };

  return (
    <div>
      <input
        type="number"
        value={largura}
        onChange={(e) => setLargura(Number(e.target.value))}
        placeholder="Digite a largura"
      />
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
        placeholder="Digite a altura"
      />
      <button onClick={calcularArea}>Calcular Área</button>
      <p>Área: {area}</p>
    </div>
  );
}

export default AreaRetangulo;
