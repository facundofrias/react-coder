
import './App.css';
import Item from './components/Item/item';
import { useEffect, useState } from 'react';

function App() {
  const [selected, setSelected] = useState(false);
  const [pasaronTresSegundos, setPasaronTresSegundos] = useState(false);

  useEffect( () => {
    if (pasaronTresSegundos) {
      console.log("Pasaron 3 segundos.");
    }
  }, [pasaronTresSegundos]);

  useEffect(() =>{
    if(selected){
      console.log("Está seleccionado");
      setTimeout(() => {
        setPasaronTresSegundos(true);
      }, 3000);
    } else {
      console.log("No está seleccionado");
      setPasaronTresSegundos(false);
    }
  }, [selected]); 

  return (
    <div className="App">
      <Item 
        isSelected={selected} 
        onSelectedChange = {setSelected}
        >
          <div>
            <p><b>T-shirt</b></p>
            <p>description</p>

            <div>
              <button>Add</button>
            </div>
          </div>
        </Item>
    </div>
  );
}

export default App;
