import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Box } from '@mui/material';

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ alignItems: 'center'}}>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}
        color= "warning"
        variant='contained'
      >
        Snack-bar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Invalid credentials"
        key={vertical + horizontal}
      />
    </Box>
  );
}