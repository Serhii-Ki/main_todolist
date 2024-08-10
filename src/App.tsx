import CustomAppBar from "./components/appBar/CustomAppBar.tsx";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import Box from "@mui/material/Box";

export type ThemeModeType = "light" | "dark";
function App() {
  const [themeMode, setThemeMode] = useState<ThemeModeType>("light");

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  const toggleThemeMode = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <CustomAppBar
            toggleThemeMode={toggleThemeMode}
            themeMode={themeMode}
          />
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
