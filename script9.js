"use strict";
//Encapsulamiento y genéricos
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this._ticket = ticket;
    }
    getTicket() {
        return this._ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this._ticket}`;
    }
}
let sorteo = new Sorteo("Maria");
sorteo.setTicket("S11");
console.log(sorteo.sortear());
