import React, { useState } from 'react';

function JurosSimples() {
  const [capital, setCapital] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [juros, setJuros] = useState(0);

  const calcularJuros = () => {
    setJuros(capital * (taxa / 100) * periodo);
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
      <button onClick={calcularJuros}>Calcular Juros Simples</button>
      <p>Juros Simples: {juros.toFixed(2)}</p>
    </div>
  );
}

export default JurosSimples;
