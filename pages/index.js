import { useState } from 'react';

function Home() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <div>Home</div>
      <div>{contador}</div>
      <button onClick={() => setContador(contador + 1)}>Adicionar</button>
    </>
  );
}

export default Home;
