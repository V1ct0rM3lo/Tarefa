import React, { useState } from 'react';

function MediaNotas() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [media, setMedia] = useState(0);

  const calcularMedia = () => {
    setMedia((nota1 + nota2 + nota3) / 3);
  };

  return (
    <div>
      <input
        type="number"
        value={nota1}
        onChange={(e) => setNota1(Number(e.target.value))}
        placeholder="Digite a primeira nota"
      />
      <input
        type="number"
        value={nota2}
        onChange={(e) => setNota2(Number(e.target.value))}
        placeholder="Digite a segunda nota"
      />
      <input
        type="number"
        value={nota3}
        onChange={(e) => setNota3(Number(e.target.value))}
        placeholder="Digite a terceira nota"
      />
      <button onClick={calcularMedia}>Calcular Média</button>
      <p>Média: {media}</p>
    </div>
  );
}

export default MediaNotas;
