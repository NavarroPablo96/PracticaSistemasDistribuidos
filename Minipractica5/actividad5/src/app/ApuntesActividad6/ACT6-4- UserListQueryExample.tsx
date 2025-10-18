// app/actividad6/UserListQueryExample.tsx
"use client";

import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

// Ejemplo de GET con React Query
export default function UserListQueryExample() {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar</p>;

  return (
    <ul>
      {data?.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
