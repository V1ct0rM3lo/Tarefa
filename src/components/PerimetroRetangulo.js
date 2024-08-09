import React, { useState } from 'react';

function PerimetroRetangulo() {
  const [largura, setLargura] = useState(0);
  const [altura, setAltura] = useState(0);
  const [perimetro, setPerimetro] = useState(0);

  const calcularPerimetro = () => {
    setPerimetro(2 * (largura + altura));
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
      <button onClick={calcularPerimetro}>Calcular Perímetro</button>
      <p>Perímetro: {perimetro}</p>
    </div>
  );
}

export default PerimetroRetangulo;
