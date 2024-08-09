import React, { useState } from 'react';

function Subtracao() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const subtrair = () => {
    setResultado(valor1 - valor2);
  };

  return (
    <div>
      <input
        type="number"
        value={valor1}
        onChange={(e) => setValor1(Number(e.target.value))}
        placeholder="Digite o primeiro número"
      />
      <input
        type="number"
        value={valor2}
        onChange={(e) => setValor2(Number(e.target.value))}
        placeholder="Digite o segundo número"
      />
      <button onClick={subtrair}>Subtrair</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Subtracao;
