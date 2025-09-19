async function obtenerUsuarios() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();
  return usuarios;
}

async function obtenerPublicaciones(id){
    let link = "https://jsonplaceholder.typicode.com/posts?userId="+id;
    const respuesta = await fetch(link);
    const publicaciones = await respuesta.json();
    return publicaciones;
}

//MostrarUsuarios();
async function mostrarUsuario(usuario) {
    let id = usuario.id;
    let publicaciones = await obtenerPublicaciones(id);
    console.log(usuario.name+"tiene "+publicaciones.length+" publicaciones");
}


async function PrimerosTresSecuencial(){
  const usuarios = await obtenerUsuarios();
  console.log("--- Ejecución Secuencial ---");

  for (let i=0; (i<usuarios.length && i<3);i++){
    await mostrarUsuario(usuarios[i])
  }
}

async function PrimerosTresParalela(){
  const usuarios = await obtenerUsuarios();
  console.log("--- Ejecución Paralela ---");
  const promesasPublicaciones=[];
  for (let i=0; (i<usuarios.length && i<3);i++){
    promesasPublicaciones.push(mostrarUsuario(usuarios[i]));
  }
  await Promise.all(promesasPublicaciones);
}

(async()=>{
  await PrimerosTresSecuencial();
  console.log("\n");
  await PrimerosTresParalela();  
})();





/*
function MostrarUsuarios(){ //Muestra todos los usuarios.
  obtenerUsuarios()
  .then(usuarios =>{
    console.log(usuarios)
  })
  .catch(error=>{
    console.error(`Arrar`,error);
  });
}*/


/*
async function PrimeroTresUsuarios(){
  const usuarios = await obtenerUsuarios();
  const primeroTres = [];
  
  const u1 = usuarios.find(u => u.id === 1);
  //console.log("Se agrega",u1.name);
  primeroTres.push(u1);

  const u2 = usuarios.find(u => u.id === 2);
  //console.log("Se agrega",u2.name);
  primeroTres.push(u2);

  const u3 = usuarios.find(u => u.id === 3);
  //console.log("Se agrega",u3.name);
  primeroTres.push(u3);

  return primeroTres;
}*/