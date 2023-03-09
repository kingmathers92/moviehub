import React, { useState, useMemo, createContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const DarkModeContext = createContext();

function ToggleTheme({ children }) {
  const [mode, setMode] = useState(() =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setMode(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#ffffff",
          },
          secondary: {
            main: "#f48fb1",
          },
        },
      }),
    [mode]
  );

  return (
    <DarkModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default ToggleTheme;
