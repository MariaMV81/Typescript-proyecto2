//Encapsulamiento y genéricos

class Sorteo <T>{
    private _ticket?: T;

    constructor(
        private nombre: string
    ){}

    setTicket(ticket: T){
        this._ticket = ticket
    }

    getTicket(){
        return this._ticket
    }

    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this._ticket}`
    }
}

let sorteo = new Sorteo<string>("Maria")
sorteo.setTicket("S11")
console.log(sorteo.sortear())