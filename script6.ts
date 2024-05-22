// TYPE PERSONALIZADO

// Type se puede utilizar para muchas cosas, pero una de ellas es para tipar objetos

//Evitemos siempre utilizar ANY

type ProgramadorType = {
    nombre: string,
    tecnologia: string[],
    tomaTe?: boolean //Si ponemos el parentesis es que es una pregunta opcional
}

let programadorObj: ProgramadorType = {
    nombre: "Maria Martos",
    tecnologia: ["Javascript", "HTML", "CSS"],
    tomaTe: true
}

let programadorObj2: ProgramadorType = {
    nombre: "Rigoberto Garcia",
    tecnologia: [ "HTML", "Cobol"],
}





