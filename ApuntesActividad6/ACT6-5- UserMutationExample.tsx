// app/actividad6/UserMutationExample.tsx
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

// Simula un PATCH a un usuario
async function updateUser(id: number, name: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
}

// Ejemplo de PATCH con React Query
export default function UserMutationExample() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      updateUser(id, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Actualiza la cache
    },
  });

  return (
    <button
      onClick={() => mutation.mutate({ id: 1, name: "Nuevo Nombre" })}
    >
      Actualizar Usuario 1
    </button>
  );
}
