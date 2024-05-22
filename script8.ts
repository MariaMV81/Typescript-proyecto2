//CLASES Y POO

class Pelicula{
    nombre?: string ; //si le ponemos un signo de pregunta ya no se queja y no hace falta inicializarlo
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`)//cuando estamos en una clase hay que usar la palabra reservada this
    }   

    constructor(nombre: string, protagonistas: string[], actores: string[]) {
        this.nombre = nombre, 
        this.protagonistas = protagonistas,
        this.actores = actores
        
    }
}

const pelicula = new Pelicula("Barbie", ["Barbie", "Ken"], ["Margot Robbie", "Rian Gostlling"] )
const pelicula2 = new Pelicula("Oppenheimer", ["Oppenheimer", "Strauss"], ["Cillian Murphy", "Robert Down"])

console.log(pelicula2)