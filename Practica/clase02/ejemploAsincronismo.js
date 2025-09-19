function descargarArchivo(url, callback) {
  setTimeout(
    () => {
    console.log("A4");
    console.log(`Descargando archivo de ${url}...`);
    callback();
    console.log("A6");
  }, 10000);
  console.log("A2")
}

console.log("A1")
descargarArchivo("https://archivo.com", () => { 
    console.log("Archivo descargado"); 
    console.log("A5")
});

console.log("A3")

//La instrucción setTimeOut(()=>{  // ACA VA CODIGO},2000); es una instrucción, ejecuta el codigo
//que tiene entre las llaves, luego de que pasen los 2000 milisegundos.
//Mientras transcurren esos 2000 milisegundos la linea de ejecución sigue con las instrucciones 
//Siguientes.
//Callback es una función que la se recibe como parámetro y se invoca en el medio de todo
//Como para complicar un poco mas la compresión.
