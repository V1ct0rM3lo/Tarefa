import React, { useState } from 'react';

function Divisao() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [erro, setErro] = useState('');

  const dividir = () => {
    if (valor2 === 0) {
      setErro('Não é possível dividir por zero');
      setResultado(0);
    } else {
      setErro('');
      setResultado(valor1 / valor2);
    }
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
      <button onClick={dividir}>Dividir</button>
      {erro && <p>{erro}</p>}
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Divisao;
