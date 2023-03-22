
import './App.css';
import Item from './components/Item/item';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(false);
  
  return (
    <div className="App">
      <Item 
        isSelected={selected} 
        onSelectedChange = {setSelected}
        name='T-shirt'
        />
    </div>
  );
}

export default App;
