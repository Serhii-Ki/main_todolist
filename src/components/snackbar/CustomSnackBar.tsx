import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useAppSelector} from "../../store/store.ts";
import {getAppState} from "../../store/selectors.ts";
import {useEffect} from "react";
import {Alert} from "@mui/material";

export default function CustomSnackbar() {
  const [open, setOpen] = React.useState(false);
  const loadStatus = useAppSelector(getAppState).loadStatus

  useEffect(() => {
    if(loadStatus === 'failed') {
      setOpen(true);
    }
  }, [loadStatus]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // const action = (
  //     <>
  //       <IconButton
  //           size="small"
  //           aria-label="close"
  //           color="inherit"
  //           onClick={handleClose}
  //       >
  //         <CloseIcon fontSize="small" />
  //       </IconButton>
  //     </>
  // );

  return (
      <div>
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
          <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{width: '100%'}}
          >
            Error!
          </Alert>
        </Snackbar>
      </div>
  );
}