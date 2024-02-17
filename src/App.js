import logo from './logo.jpg';
import './App.css';
import Contador from './componentes/Contador'
import Button from './componentes/Button';
import { useState } from 'react';

function App() {
  const[numclicks, setNumClicks]=useState(0)
  const manejarClick= () => {
    setNumClicks(numclicks+1)

  }

  const reiniciarContador=() => {
    setNumClicks(0)
  }
  return (
    <div className="App">
      <div className='logo.contenedor'>
        <img 
          className='logo'
          src={logo}
          alt='Logo TI'
            />
      </div>

      <div className='contenedor-principal'>
        <Contador numClicks={numclicks}/>
        <Button texto="Click" esBotonClick={true} manejarClick={manejarClick}/>
        <Button texto="Reiniciar" esBotonClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
