import { useState } from 'react';

function Home() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <div>Página inicial - branch teste</div>
      <div>{contador}</div>
      <button onClick={() => setContador(contador + 1)}>Adicionar</button>
    </>
  );
}

export default Home;
