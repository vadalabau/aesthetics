import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import laid from './assets/laid.png';
import gabe from './assets/gabe.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Aesthetics</h1>
      </header>
      <main>
        <div className="images-container">
          <a>
            <img src={laid} className="img david" alt="David" />
          </a>
          <a>
            <img src={gabe} className="img gabe" alt="Gabe" />
          </a>
        </div>
        <div className="card">
          <p>
            Cuando se trata de un cuerpo aesthetics (en español = estético), la proporción más importante es la relación hombros-cintura. Los dioses del movimiento aesthetics dicen que debes tener al menos una proporción de 1,618 : 1 con los hombros y la cintura. Eso significa que tus hombros deben ser significativamente más anchos que tu cintura.
          </p>
          <p>
            Si estás cerca de una proporción 1:1 no importa cuánto músculo recubra tu cuerpo, que no se verá bien. Basta con mirar la increíble relación hombro-cintura de los competidores de 1er y 2do lugar en el concurso de físico NPC.
          </p>

            <a href="https://www.youtube.com/watch?v=NyWAsnJ2vgI" className='asd'>Como lograrlo</a>
          <div className="counter">
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      </main>
      <footer>
        <p>© 2024 Aesthetics Inc.</p>
      </footer>
    </>
  );
}

export default App;
