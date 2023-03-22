import logo from './logo.svg';
import './App.css';
import Item from './components/Item/item';

function App() {
  return (
    <div className="App">
      <Item seleccionado={true} nombre='T-shirt'/>
    </div>
  );
}

export default App;
