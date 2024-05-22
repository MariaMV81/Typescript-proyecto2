"use strict";
//Datos Primitivos , string , number, boolean, null, undefined
let interMiami = 11;
let fcDallas = 11;
let mesia = 1;
let juegaMesi = true;
let palabras = " Me emocione al ver a Mesi";
function jugar(equipo1, equipo2, juegaMesi) {
    let motivo = '';
    if (juegaMesi) {
        equipo1 += mesia;
        motivo = "porque juega Mesi";
    }
    if (equipo1 > equipo2) {
        console.log(`Ganador Inter Miami ${motivo}`);
    }
    if (equipo1 === equipo2) {
        console.log("Empate");
    }
    if (equipo1 < equipo2) {
        console.log("Ganador FC Dallas");
    }
}
jugar(interMiami, fcDallas, juegaMesi);
