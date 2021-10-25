let num1: string = document.getElementById("num1");
let num2: string = document.getElementById("num2");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numUno: number = Number(num1.value);
  let numDos: number = Number(num2.value);
  let numMedio: number = numUno;
  let suma: number = 0;

  while (numMedio <= numDos) {
    suma = suma + numMedio;
    numMedio = numMedio + 1;
  }
  console.log(" el resultado de la suma es " + suma);
});
