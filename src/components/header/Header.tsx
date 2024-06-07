import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import ProgressLinear from "../progressLinear/ProgressLinear.tsx";

function Header() {
  return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <ProgressLinear/>
      </Box>
  );
}

export default Header;