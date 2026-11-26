export const alumnos =[
    {nombre:"Ana", nota:7.5},
    {nombre:"Luis",nota:4.2},
    {nombre:"Marta",nota:9},
    {nombre:"Pablo",nota:5},
    {nombre:"Sara",nota:3.8}
]


//Calcula la media de las notas

export function calcularMedia(alumnos){
    const suma= alumnos.reduce((total,alumno) =>{
        return total + alumno.nota;
    },0);


    return suma/alumnos.length;

}

//Cuenta los alumnos aprobados

export function contarAprobados(alumnos){
    return alumnos.filter(alumnos=>alumnos.nota>=5).length;
}