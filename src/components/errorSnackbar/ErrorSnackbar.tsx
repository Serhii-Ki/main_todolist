import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

type Props = {
  errorText: string;
};

export default function ErrorSnackbar({ errorText }: Props) {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={errorText}
        key={vertical + horizontal}
      />
    </Box>
  );
}
