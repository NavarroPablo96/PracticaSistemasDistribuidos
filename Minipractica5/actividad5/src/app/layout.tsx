import Link from "next/link";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
