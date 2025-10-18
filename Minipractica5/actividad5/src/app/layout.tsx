//app/layout.tsx
"use client";

import Link from "next/link";
import React, {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(()=>new QueryClient());
  return (
   <html lang="es">
      <body>
        <QueryClientProvider client={queryClient}>
          <header style={{ padding: "1rem", backgroundColor: "#eee" }}>
            <nav>
              <Link href="/">Lista de Pokémons</Link>
            </nav>
          </header>

          <main style={{ minHeight: "80vh", padding: "1rem" }}>
            {children}
          </main>

          <footer style={{ padding: "1rem", backgroundColor: "#eee", textAlign: "center" }}>
            <p>TextoTextoTextoTextoMuchoTexto de relleno para el footer</p>
          </footer>
        </QueryClientProvider>
      </body>
    </html>
    /*
        <html lang="es">
      <body>
        <header style={{ padding: "1rem", backgroundColor: "#eee" }}>
          <nav>
            <Link href="/">Lista de Pokémons</Link>
          </nav>
        </header>

        <main style={{ minHeight: "80vh", padding: "1rem" }}>
          {children}
        </main>

        <footer style={{ padding: "1rem", backgroundColor: "#eee", textAlign: "center" }}>
          <p>Texto de relleno para el footer</p>
        </footer>
      </body>
    </html>
    */
  );
}
