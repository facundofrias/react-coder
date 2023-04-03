console.clear();
const productos = [
    {
      id: 0,
      name: "Zapatos",
      description: "Zapatos negros de vestir",
      stock: 7
  },
    {
      id: 1,
      name: "Buzo",
      description: "Buzo azul",
      stock: 11
  },
  {
    id: 0,
    name: "Corbata",
    description: "Corbata verde y plateada",
    stock: 17
  }
]

const promesa = new Promise (
  (resolved, rejected) => {
    console.log("Promise created.");
    resolved(productos)
  }
)

promesa.then(
  (response) => {
    console.log("Cargando productos...");
    setTimeout(() => {
      console.log(response);
    }, 3000);
  }
)

// const myPromise = new Promise(
//   (resolved, rejected) => {
//     console.log("Generando productos");
//     setTimeout(() => {
//       resolved(["Buzo", "Zapatilla", "Jean"])
//     }, 3000);
//   }
// );

// myPromise
//   .then(
//     (response) => {
//       console.log(response)
//     }
//   )
//   .catch((error) => {
//     console.log("Error!!!!" + error)
//   });
//   console.log(2+2)