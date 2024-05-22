"use strict";
//INTERFACES BASICAS
let dev = {
    nombre: "Maria Martos",
    tecnologia: ["Javascript", "HTML", "CSS"],
    tomaTe: true
};
let dev2 = {
    nombre: "Rigoberto Garcia",
    tecnologia: ["HTML", "Cobol"],
    tomaTe: null
};
function enviarCurriculum(programador) {
    console.log(`Este Curriculum es de ${programador.nombre}`);
}
enviarCurriculum(dev2);
