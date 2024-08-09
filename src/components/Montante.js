import React, { useState } from 'react';

function JurosCompostos() {
  const [capital, setCapital] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [montante, setMontante] = useState(0);

  const calcularMontante = () => {
    setMontante(capital * Math.pow(1 + taxa / 100, periodo));
  };

  return (
    <div>
      <input
        type="number"
        value={capital}
        onChange={(e) => setCapital(Number(e.target.value))}
        placeholder="Digite o capital"
      />
      <input
        type="number"
        value={taxa}
        onChange={(e) => setTaxa(Number(e.target.value))}
        placeholder="Digite a taxa de juros (%)"
      />
      <input
        type="number"
        value={periodo}
        onChange={(e) => setPeriodo(Number(e.target.value))}
        placeholder="Digite o período"
      />
      <button onClick={calcularMontante}>Calcular Montante</button>
      <p>Montante com Juros Compostos: {montante.toFixed(2)}</p>
    </div>
  );
}

export default JurosCompostos;
