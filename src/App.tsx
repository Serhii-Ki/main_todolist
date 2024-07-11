import {Box, LinearProgress} from "@mui/material";
import {useAppSelector} from "./store/store.ts";
import {getAppState,} from "./store/selectors.ts";
import CustomAppBar from "./components/appBar/AppBar.tsx";
import {Outlet} from "react-router-dom";

function App() {
  const appState = useAppSelector(getAppState);

  return (
    <>
      <CustomAppBar/>
      <Box position='relative'>
        {appState.loadStatus === 'loading' && <LinearProgress color="success" style={{position: 'absolute', bottom: '0', left: '0', right: '0'}}/>}
      </Box>
      <Outlet/>
    </>
  )
}

export default App
