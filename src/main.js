import "./style.css";
import { render } from "./dom.js";

// Seleccionamos el h1
const titulo = document.querySelector("h1");

// Le ponemos el texto
titulo.textContent = "Gestor de tareas";

// Le añadimos la clase titulo
titulo.classList.add("titulo");

// Pintamos las tareas
render();



// HTMLCollection: es VIVA.
// Se actualiza automáticamente cuando se añaden o eliminan elementos.

// NodeList de querySelectorAll(): es ESTÁTICA.
// No se actualiza automáticamente cuando se añaden o eliminan elementos.

/*
const lista = document.querySelector("#lista");

const vivos = document.getElementsByClassName("prueba");
const foto = document.querySelectorAll(".prueba");
console.log("A:", vivos.length, foto.length);

const li = document.createElement("li");
li.className = "prueba";
li.textContent = "<b>Nueva</b>";
lista.append(li);
console.log("B:", vivos.length, foto.length);

const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Gestor</em>";
console.log("C:", h1.textContent, h1.children.length);

console.log("D:", document.getElementById("#lista"));

// PREDICCIONES ANTES DE EJECUTAR

// A: 0, 0
// B: 1, 0
// C: Gestor, 1
// D: null
// El nuevo li mostrará literalmente: <b>Nueva</b>*/


