
import {
  alumnos,
  calcularMedia,
  contarAprobados
} from "./notas.js";

export function renderNotas() {
     
  const lista = document.getElementById("lista-notas");
  const resumen = document.getElementById("resumen-notas");

  
  // Limpiamos la lista antes de volver a pintarla
  lista.replaceChildren();

  // Creamos una copia para no modificar el array original
  const alumnosOrdenados = [...alumnos].sort(
    (a, b) => b.nota - a.nota
  );

  
for (const alumno of alumnosOrdenados) {
  const fila = document.createElement("tr");

  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = alumno.nombre;

  const celdaNota = document.createElement("td");
  celdaNota.textContent = alumno.nota;

  fila.append(celdaNombre, celdaNota);

  if (alumno.nota >= 5) {
    fila.classList.add("aprobado");
  } else {
    fila.classList.add("suspenso");
  }

  lista.append(fila);
}

  const media = calcularMedia(alumnos);
  const aprobados = contarAprobados(alumnos);

  resumen.textContent =
    `Media: ${media.toFixed(1)} · Aprobados: ${aprobados} de ${alumnos.length}`;
}
