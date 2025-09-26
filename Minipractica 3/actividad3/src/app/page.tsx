function Titulo() {
  return <h1>Esto es un titulo? si es un titulo</h1>;
}

function Parrafo() {
  return <p>
    Un componente <br />
    es una función (o clase, pero hoy casi siempre función) <br />
    que retorna JSX, que es el código que describe cómo se ve algo en pantalla.
    <br /></p>;
}

function Lista() {
  return (
    <ul>
      <li>Elemento uno</li>
      <li>Elemento dos</li>
      <li>Elemento tres</li>
    </ul>
  );
}

// Componente principal que exporto por default

export default function Home() {
  return (
    <main>
      <Titulo />
      <br />
      <h1>Hola desde export default</h1>
      <h1><br />PARRAFO:</h1>
      <Parrafo />
      <h1><br />LISTA:</h1>
      <Lista />
      <h1><br />BOTON:</h1>
       <button>Secundario</button>
    </main>
  );
}