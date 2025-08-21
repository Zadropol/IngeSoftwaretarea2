import sumar from "./sumador";
import sayHello from "./saludador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const formsumar = document.querySelector("#sumar-form");
const divsumar = document.querySelector("#resultado-divsumar");
const saludo = document.querySelector("#saludo");
const divsaludo = document.querySelector("#resultado-divsaludo");


formsumar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  divsumar.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

saludo.addEventListener("click ", () => {
  const greeting = sayHello();
  divsaludo.innerHTML = "<p>" + greeting + "</p>";
});

