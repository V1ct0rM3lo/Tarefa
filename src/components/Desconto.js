import React, { useState } from 'react';

function PrecoComDesconto() {
  const [preco, setPreco] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [precoFinal, setPrecoFinal] = useState(0);

  const calcularDesconto = () => {
    setPrecoFinal(preco * (1 - desconto / 100));
  };

  return (
    <div>
      <input
        type="number"
        value={preco}
        onChange={(e) => setPreco(Number(e.target.value))}
        placeholder="Digite o preço"
      />
      <input
        type="number"
        value={desconto}
        onChange={(e) => setDesconto(Number(e.target.value))}
        placeholder="Digite o desconto (%)"
      />
      <button onClick={calcularDesconto}>Calcular Preço com Desconto</button>
      <p>Preço com desconto: {precoFinal.toFixed(2)}</p>
    </div>
  );
}

export default PrecoComDesconto;
