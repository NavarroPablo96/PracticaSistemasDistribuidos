//Contextos en React

import React, { createContext, useContext, useState, ReactNode} from "react";

// 1. Crear el contexto
// Definir tipo del contexto
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

// Crear el contexto con valor inicial null
const ThemeContext = createContext<ThemeContextType | null>(null);
//const ThemeContext = createContext();

// 2. Crear un proveedor
//  function ThemeProvider({ children }) {
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Usar el contexto en un componente hijo
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }
  return context;
}

function ThemeButton() {
  //const { theme, setTheme } = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Tema actual: {theme}
    </button>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}



