import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Logo from '../../assets/Ellipse 367.png'

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
        PaperProps={{ sx: { width: "35%", backgroundColor: "#010412", color: "#FFFFFF", borderRadius: "0px" } }}
        sx={{
          backdropFilter: "blur(2px)",
        }}
      >
        <DialogTitle id="alert-dialog-title" textAlign="center" fontWeight={"bold"} fontSize={"25px"}>
          {"Deleted!"}
        </DialogTitle>
        <img src={Logo} sx={{ py: 8 }} />
        <DialogContent>
          <DialogContentText id="alert-dialog-description" textAlign="center" color={"#6F7288"}>
            Card has been deleted
          </DialogContentText>
        </DialogContent>
        <Divider sx={{ bgcolor: "#11121D" }} />
        <DialogActions sx={{ padding: "0px" }}>
          <ButtonGroup fullWidth size='large' aria-label="outlined primary button group">
            <Button variant='flat' onClick={handleClose} style={{ textTransform: "none", borderRadius: "0px" }}>Cancel</Button>
            <Button variant='contained' onClick={handleClose} sx={{ textTransform: "none", borderRadius: "0px" }}>Ok</Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </div>
  );
}