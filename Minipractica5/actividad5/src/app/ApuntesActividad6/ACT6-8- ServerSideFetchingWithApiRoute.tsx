// app/actividad6/ServerSideFetchingWithApiRoute.tsx

// Server-side Data Fetching usando endpoint interno
export default async function ServerSideFetchingWithApiRoute() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // para evitar datos viejos
  });
  const products = await res.json();

  return (
    <div>
      <h1>Productos</h1>
      {products.map((p: any) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
