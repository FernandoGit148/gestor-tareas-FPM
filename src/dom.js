import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

// Función para pintar las tareas en pantalla
export function render() {

    // Seleccionamos la lista y el resumen
    const lista = document.querySelector("#lista");
    const resumen = document.querySelector("#resumen");

    // Vaciamos la lista antes de volver a pintarla
    lista.replaceChildren();

    // Recorremos todas las tareas del estado
    estado.tareas.forEach((tarea) => {

        // Creamos un elemento li
        const li = document.createElement("li");

        // Ponemos el texto de la tarea
        li.textContent = tarea.texto;

        // Si está completada, añadimos la clase CSS
        if (tarea.completada === true) {
            li.classList.add("completada");
        }

        // Añadimos el li a la lista
        lista.append(li);
    });

    // Actualizamos el resumen
    const pendientes = contarPendientes(estado.tareas);
    const completadas = contarCompletadas(estado.tareas);

    resumen.textContent = `${completadas} completadas · ${pendientes} pendientes`;
}