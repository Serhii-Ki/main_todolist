import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SnackbarError() {
  const [open, setOpen] = React.useState(false);

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
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
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
            message="Note archived"
            action={action}
        />
      </div>
  );
}

export default SnackbarError