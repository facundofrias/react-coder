import "./App.css";
import Item from "./components/Item/item";
import { useEffect, useState } from "react";

function App() {
  const [selected, setSelected] = useState(false);
  const [products, setProducts] = useState([]);
  // const [pasaronTresSegundos, setPasaronTresSegundos] = useState(false);

  // useEffect(() => {
  //   if (pasaronTresSegundos) {
  //     console.log("Pasaron 3 segundos.");
  //   }
  // }, [pasaronTresSegundos]);

  // useEffect(() =>{
  //   if(selected){
  //     console.log("Está seleccionado");
  //     setTimeout(() => {
  //       setPasaronTresSegundos(true);
  //     }, 3000);
  //   } else {
  //     console.log("No está seleccionado");
  //     setPasaronTresSegundos(false);
  //   }
  // }, [selected]);

  useEffect(() => {
    console.clear();

    const getMockProducts = ((resolved, rejected) => {
      setTimeout(() => {
        resolved([
          {
            id: 1,
            name: "t-shirt",
            description: "description",
            stock: 10,
          },
          {
            id: 2,
            name: "pants",
            description: "description",
            stock: 10,
          },
          {
            id: 3,
            name: "shoes",
            description: "description",
            stock: 10,
          },
        ]);
      }, 3000);
    });

    const mockApiProducts = new Promise(getMockProducts);

    const updateProducts = (response) => {
      setProducts(response);
    };
    const showError = (error) => {
      console.log("Error inesperado, pruebe en unos minutos por favor");
    };

    mockApiProducts
      .then(updateProducts)
      .catch(showError);
  }, [selected]);

  return (
    <div className="App">
      {products.length > 0 ? products.map(
        (product) => {
          return <Item isSelected={selected} onSelectedChange={setSelected}>
                  <div>
                    <p>
                      <b>{product.name}</b>
                    </p>
                    <p>{product.description}</p>

                    <div>
                      <button>Add</button>
                    </div>
                  </div>
                </Item>
        }
      ) : null 
      }
    </div>
  );
}

export default App;
