import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas

 } from "./tareas.js";

console.table(estado.tareas);

const pendientes = contarPendientes(estado.tareas);
const completadas = contarCompletadas(estado.tareas);


  // Seleccionamos el h1
const titulo = document.querySelector("h1");

// Le ponemos el texto
titulo.textContent = "Gestor de tareas";

// Le añadimos la clase titulo
titulo.classList.add("titulo");

// Seleccionamos el párrafo resumen
const resumen = document.querySelector("#resumen");

// Actualizamos el número de tareas pendientes
resumen.textContent = `Tienes ${pendientes} tareas pendientes y ${completadas} tareas completadas.`;

// Seleccionamos la lista
const lista = document.querySelector("#lista");

// Creamos tres elementos li
const tarea1 = document.createElement("li");
const tarea2 = document.createElement("li");
const tarea3 = document.createElement("li");

// Añadimos textos diferentes
tarea1.textContent = "Comprar comida";
tarea2.textContent = "Estudiar JavaScript";
tarea3.textContent = "Hacer ejercicio";

// Insertamos los elementos dentro de la lista
lista.append(tarea1, tarea2, tarea3);


tarea1.classList.add("demo");
tarea2.classList.add("demo");
tarea3.classList.add("demo");


const elementosDemo = document.querySelectorAll(".demo");

elementosDemo.forEach((elemento) => {
    elemento.textContent = "- " + elemento.textContent;
});




// Seleccionamos la lista por su ID
// IMPORTANTE: getElementById lleva el nombre sin #
const listaDemo = document.getElementById("lista");

// Seleccionamos los elementos con clase demo
// IMPORTANTE: tampoco lleva punto
const elementosDemo1 = document.getElementsByClassName("demo");



// Intentamos recorrer la colección con forEach
try {
    elementosDemo1.forEach((elemento) => {
        console.log(elemento.textContent);
    });
} catch (error) {
    console.log(error);
    // Error: elementosDemo1.forEach is not a function
}


// Convertimos la HTMLCollection en un array
const arrayDemo = Array.from(elementosDemo1);

// Recorremos los elementos y cambiamos "- " por "✓ "
arrayDemo.forEach((elemento) => {
    elemento.textContent = elemento.textContent.replace("- ", "✓ ");
});

// HTMLCollection: es VIVA.
// Se actualiza automáticamente cuando se añaden o eliminan elementos.

// NodeList de querySelectorAll(): es ESTÁTICA.
// No se actualiza automáticamente cuando se añaden o eliminan elementos.





