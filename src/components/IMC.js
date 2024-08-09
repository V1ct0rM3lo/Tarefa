import React, { useState } from 'react';

function IMC() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);

  const calcularIMC = () => {
    if (altura > 0) {
      setImc(peso / Math.pow(altura, 2));
    } else {
      setImc(0);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(Number(e.target.value))}
        placeholder="Digite seu peso (kg)"
      />
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
        placeholder="Digite sua altura (m)"
      />
      <button onClick={calcularIMC}>Calcular IMC</button>
      <p>IMC: {imc.toFixed(2)}</p>
    </div>
  );
}

export default IMC;
