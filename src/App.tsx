import CustomAppBar from "./components/appBar/CustomAppBar.tsx";
import { useEffect, useState } from "react";
import {
  CircularProgress,
  createTheme,
  LinearProgress,
  ThemeProvider,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import { useAppDispatch } from "./utils/hooks/useAppDispatch.ts";
import { useAppSelector } from "./utils/hooks/useAppSelector.ts";
import { authThunks, selectIsAuthenticated } from "./store/authSlice.ts";
import { selectApp } from "./store/appSlice.ts";
import ErrorSnackbar from "./components/errorSnackbar/ErrorSnackbar.tsx";

export type ThemeModeType = "light" | "dark";
function App() {
  const [themeMode, setThemeMode] = useState<ThemeModeType>("light");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectIsAuthenticated);
  const { isInitialized, status, error } = useAppSelector(selectApp);

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

  useEffect(() => {
    if (isInitialized) {
      if (isLoggedIn) {
        navigate("/todolist", { replace: true });
      } else {
        navigate("/auth", { replace: true });
      }
    }
  }, [isInitialized, isLoggedIn, navigate]);

  if (!isInitialized) {
    return (
      <div
        style={{
          position: "fixed",
          top: "30%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

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
          <Box>
            <CustomAppBar
              toggleThemeMode={toggleThemeMode}
              themeMode={themeMode}
            />
            {status === "loading" && <LinearProgress color="success" />}
          </Box>
          <Outlet />
        </Box>
        {error && <ErrorSnackbar errorText={error} />}
      </ThemeProvider>
    </>
  );
}

export default App;
