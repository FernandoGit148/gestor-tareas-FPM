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



