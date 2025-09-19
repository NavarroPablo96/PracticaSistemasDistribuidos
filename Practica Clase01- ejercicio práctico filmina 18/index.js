//const module = require("package");

//==>converted to an ES module==>
//import module from "package";
import { Persona, personas } from "./constants.js";

function nombreMasViejo(personas){
    let nombre="NADIE";
    let edad=-1
    for(const p of personas){
        if(p.edad>edad){
            edad=p.edad;
            nombre=p.nombre_Completo;
        }
    }
    return nombre;
}

function nombreMasAlto(personas){
    let nombre="NADIE";
    let altura=-1
    for(const p of personas){
        if(p.altura>altura){
            altura=p.altura;
            nombre=p.nombre_Completo;
        }
    }
    return nombre;
}

console.log("Las personas son:");
console.log(personas);

function mostrarResultados(personas) {
  console.log(`
El más viejo del grupo es: ${nombreMasViejo(personas)}
El más alto del grupo es: ${nombreMasAlto(personas)}
    `);
}

mostrarResultados(personas);