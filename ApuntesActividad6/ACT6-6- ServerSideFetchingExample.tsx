// app/actividad6/ServerSideFetchingExample.tsx

type Product = {
  id: number;
  title: string;
};

// Ejemplo básico de Server-side Data Fetching (sin endpoint interno)
export default async function ServerSideFetchingExample() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
