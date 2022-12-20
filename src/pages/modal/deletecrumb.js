import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Logo from '../../assets/Vector.png'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        DeleteCrumb
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { width: "35%", backgroundColor: "#010412", color: "#FFFFFF", borderRadius: "0px", pt: 6 } }}

      >
        <img src={Logo} />
        <DialogTitle id="alert-dialog-title" textAlign="center" fontWeight={"bold"} fontSize={"25px"}>
          {"Confirm"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description" textAlign="center" color={"#6F7288"}>
            Are you sure you want  to delete the card?
          </DialogContentText>
          <br />
          <DialogContentText id="alert-dialog-description" textAlign="center" color={"#6F7288"}>
            Upon deletion the card will be moved to ‘Deleted’ folder and
            will remain there until the end of billingcycle.
          </DialogContentText>
        </DialogContent>
        <Divider sx={{ bgcolor: "#11121D" }} />
        <DialogActions sx={{ padding: "0px" }}>
          <ButtonGroup fullWidth size='large' aria-label="outlined primary button group">
            <Button variant='flat' onClick={handleClose} style={{ textTransform: "none", borderRadius: "0px" }}>Cancel</Button>
            <Button variant='contained' onClick={handleClose} sx={{ textTransform: "none", borderRadius: "0px" }}>Delete</Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </div>
  );
}