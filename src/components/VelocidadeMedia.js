import React, { useState } from 'react';

function VelocidadeMedia() {
  const [distancia, setDistancia] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [velocidade, setVelocidade] = useState(0);
  const [erro, setErro] = useState('');

  const calcularVelocidade = () => {
    if (tempo > 0) {
      setVelocidade(distancia / tempo);
      setErro('');
    } else {
      setErro('O tempo deve ser maior que zero');
      setVelocidade(0);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={distancia}
        onChange={(e) => setDistancia(Number(e.target.value))}
        placeholder="Digite a distância"
      />
      <input
        type="number"
        value={tempo}
        onChange={(e) => setTempo(Number(e.target.value))}
        placeholder="Digite o tempo"
      />
      <button onClick={calcularVelocidade}>Calcular Velocidade Média</button>
      {erro && <p>{erro}</p>}
      <p>Velocidade Média: {velocidade}</p>
    </div>
  );
}

export default VelocidadeMedia;
