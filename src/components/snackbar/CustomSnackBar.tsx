import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
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