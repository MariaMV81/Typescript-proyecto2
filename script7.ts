//INTERFACES BASICAS


interface Programador{
    nombre: string,
    tecnologia: string[],
    tomaTe?: boolean | null //Si ponemos el parentesis es que es una pregunta opcional
}

let dev: Programador = {
    nombre: "Maria Martos",
    tecnologia: ["Javascript", "HTML", "CSS"],
    tomaTe: true
}

let dev2: Programador = {
    nombre: "Rigoberto Garcia",
    tecnologia: ["HTML", "Cobol"],
    tomaTe: null
}

function enviarCurriculum (programador: Programador) {
    console.log(`Este Curriculum es de ${programador.nombre}`)
}

enviarCurriculum(dev2)