//Datos Primitivos , string , number, boolean, null, undefined

let interMiami: number = 11
let fcDallas: number = 11
let mesia: number = 1
let juegaMesi: boolean = true

let palabras: string = " Me emocione al ver a Mesi"

function jugar (equipo1: number, equipo2: number, juegaMesi: boolean): void {
    let motivo: string = ''
    if (juegaMesi) {
        equipo1 += mesia
        motivo = "porque juega Mesi"
    }
    if (equipo1 > equipo2) {
        console.log(`Ganador Inter Miami ${motivo}`)
    }
    if (equipo1 === equipo2) {
        console.log("Empate")
    }
    if (equipo1 < equipo2) {
        console.log("Ganador FC Dallas")    
    }

}

jugar (interMiami, fcDallas, juegaMesi);