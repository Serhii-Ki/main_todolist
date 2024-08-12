import CustomAppBar from "./components/appBar/CustomAppBar.tsx";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import Box from "@mui/material/Box";
import { useAppDispatch } from "./utils/hooks/useAppDispatch.ts";
import { useAppSelector } from "./utils/hooks/useAppSelector.ts";
import { authThunks, selectIsAuthenticated } from "./store/authSlice.ts";

export type ThemeModeType = "light" | "dark";
function App() {
  const [themeMode, setThemeMode] = useState<ThemeModeType>("light");
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsAuthenticated);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  const toggleThemeMode = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    dispatch(authThunks.authMe());
  }, []);

  console.log(isLoggedIn);

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
