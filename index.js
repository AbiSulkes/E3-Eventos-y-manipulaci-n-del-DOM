const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },
  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },
  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort"],
    imagen: "./img/4quesos.png",
  },
  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },
  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Selectores
const formulario = document.getElementById("formulario");
const inputNumero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

// Mostrar última pizza guardada
document.addEventListener("DOMContentLoaded", function () {
  const ultimaPizzaGuardada = localStorage.getItem("ultimaPizza");

  if (ultimaPizzaGuardada) {
    const pizza = JSON.parse(ultimaPizzaGuardada);
    resultado.innerHTML = `
      <div class="card">
        <img src="${pizza.imagen}" alt="${pizza.nombre}">
        <h2>${pizza.nombre}</h2>
        <span>${pizza.ingredientes.join(", ")}</span>
        <p>Precio: $${pizza.precio}</p>
      </div>
    `;
  }
});

// Evento - captura del input
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const numeroIngresado = Number(inputNumero.value);
  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === numeroIngresado);

  resultado.innerHTML = "";

  if (pizzaEncontrada) {
    // Renderizar la pizza
    resultado.innerHTML = `
      <div class="card">
        <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
        <h2>${pizzaEncontrada.nombre}</h2>
        <span>${pizzaEncontrada.ingredientes.join(", ")}</span>
        <p>Precio: $${pizzaEncontrada.precio}</p>
      </div>
    `;

    // Guardar la pizza en el LocalStorage
    localStorage.setItem("ultimaPizza", JSON.stringify(pizzaEncontrada));
  } else {
    resultado.innerHTML =
      '<div class="error">❌ No se encontró ninguna pizza con ese ID.</div>';
  }
});



