console.clear();

const myPromise = new Promise(
  (resolved, rejected) => {
    console.log("Generando productos");
    setTimeout(() => {
      resolved(["Buzo", "Zapatilla", "Jean"])
    }, 3000);
  }
);

myPromise
  .then(
    (response) => {
      console.log(response)
    }
  )
  .catch((error) => {
    console.log("Error!!!!" + error)
  });
  console.log(2+2)