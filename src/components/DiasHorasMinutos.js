import React, { useState } from 'react';

function DiasParaTempo() {
  const [dias, setDias] = useState(0);
  const [tempo, setTempo] = useState('');

  const converterTempo = () => {
    const horas = dias * 24;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    setTempo(`${horas} horas, ${minutos} minutos e ${segundos} segundos`);
  };

  return (
    <div>
      <input
        type="number"
        value={dias}
        onChange={(e) => setDias(Number(e.target.value))}
        placeholder="Digite o valor em dias"
      />
      <button onClick={converterTempo}>Converter para Horas, Minutos e Segundos</button>
      <p>Tempo: {tempo}</p>
    </div>
  );
}

export default DiasParaTempo;
