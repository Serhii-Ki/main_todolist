import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useAppSelector} from "../../store/store.ts";
import {selectorAppState} from "../../store/selectors.ts";
import {useEffect} from "react";

function SnackbarError() {
  const [open, setOpen] = React.useState(false);
  const {loadingStatus, errorText} = useAppSelector(selectorAppState);

  useEffect(() => {
    if(loadingStatus === 'error') {
      setOpen(true)
    }
  }, [loadingStatus]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
      <>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
  );

  return (
      <div>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={errorText}
            action={action}
        />
      </div>
  );
}

export default SnackbarError