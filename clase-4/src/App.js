
import './App.css';
import Item from './components/Item/item';
import { useEffect, useState } from 'react';

function App() {
  const [selected, setSelected] = useState(false);

  useEffect(()=>{
    console.log("START");
  }, []);
  useEffect(() =>{
    console.log(`Selected: ${selected}`);
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
