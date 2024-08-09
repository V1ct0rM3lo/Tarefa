import React, { useState } from 'react';

function Potencia() {
  const [base, setBase] = useState(0);
  const [expoente, setExpoente] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularPotencia = () => {
    setResultado(Math.pow(base, expoente));
  };

  return (
    <div>
      <input
        type="number"
        value={base}
        onChange={(e) => setBase(Number(e.target.value))}
        placeholder="Digite a base"
      />
      <input
        type="number"
        value={expoente}
        onChange={(e) => setExpoente(Number(e.target.value))}
        placeholder="Digite o expoente"
      />
      <button onClick={calcularPotencia}>Calcular Potência</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Potencia;
