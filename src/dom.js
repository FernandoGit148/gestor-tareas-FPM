
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

export function render() {
  // ERROR 1:
  // Síntoma: lista es null y aparece un error al intentar
  // utilizarla.
  // Causa: getElementById recibe el ID sin el símbolo #.
  const lista = document.getElementById("lista");

  const resumen = document.querySelector("#resumen");

  // ERROR 2:
  // Síntoma: solamente aparece la última tarea.
  // Causa: replaceChildren() estaba dentro del bucle,
  // por lo que borraba las tareas anteriores en cada vuelta.
  lista.replaceChildren();

  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;

    // ERROR 3:
    // Síntoma: todas las tareas aparecen como completadas
    // y se modifica su estado al renderizar.
    // Causa: se utilizaba = (asignación) en lugar de ===
    // (comparación).
    if (tarea.completada === true) {
      li.classList.add("completada");
    }

    lista.append(li);
  }

  // ERROR 4:
  // Síntoma: aparece el texto de la función en vez del
  // número de tareas pendientes.
  // Causa: se estaba mostrando la referencia a la función
  // sin ejecutarla.
 resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;
}
