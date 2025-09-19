/*const persona = {
name : "Pablo Navarro",
edad : 29,
altura : 1.75
}*/

export class Persona{
    constructor(nombre,edad,altura){
        this.nombre_Completo=nombre;
        this.edad=edad;
        this.altura=altura;
    }
}

/*const pablo = new Persona('Pablo Navarro', 29, 1.75);
const ana = new Persona('Ana Gómez', 25, 1.68);
const luis = new Persona('Luis Perez', 35, 1.80);
const maria = new Persona('María López', 22, 1.60);
const javier = new Persona('Javier Ruiz', 40, 1.78);

const personas = [];
personas.push(pablo);
personas.push(ana);
personas.push(luis);
personas.push(maria);
personas.push(javier);

module.exports={
    Persona,personas
};*/
//Fue necesario exportarlo de esta forma porque tiraba un warning
//Se paso todo al formato ES Modules
//Se modifico el package.json agregandole   "type": "module",
//Se modifico en este archivo el export estaba como está arriba
//y ahora quedo como esta aca abajo:            //Ademas fue necesario a clase agregarle el export antes
export const personas = [
    new Persona('Pablo Navarro', 29, 1.75),
    new Persona('Ana Gómez', 25, 1.68),
    new Persona('Luis Perez', 35, 1.80),
    new Persona('María López', 22, 1.60),
    new Persona('Javier Ruiz', 40, 1.78),
];