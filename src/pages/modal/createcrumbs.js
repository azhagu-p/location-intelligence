import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Upload from '@mui/icons-material/ImageOutlined';
import Gallery from '../../assets/gallery-add.png';
import Divider from '@mui/material/Divider';

export default function FormDialog() {
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
        create crumb
      </Button>

      <Dialog open={open} onClose={handleClose}
        PaperProps={{ sx: { width: "35%", backgroundColor: "#010412", color: "#FFFFFF", borderRadius: "0px" } }}
        sx={{
          backdropFilter: "blur(2px)",
        }}
      >
        <DialogTitle textAlign="center">Create A New Crumb</DialogTitle>
        <Divider sx={{ bgcolor: "#11121D" }} />
        <DialogContent sx={{ mx: 4 }}>
          <TextField
            InputProps={{
              style: { color: "white" }
            }}
            placeholder="Crumbs Name ( e.g. Coffee Lovers - NYC )"
            InputLabelProps={{
              style: { color: "#6F7288" }
            }}
            focused
            id="name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ my: 2 }}
          />
          <TextField
            InputProps={{
              style: { color: "white" }
            }}
            placeholder="Description"
            InputLabelProps={{
              style: { color: "#6F7288" }
            }}
            focused
            id="standard-multiline-static"
            multiline
            rows={3}
            variant="standard"
            fullWidth
            sx={{ my: 2 }}
          />
          <Button
            sx={{ my: 2, backgroundColor: "#0B0E24", height: "100px", textTransform: "none", color: "#6F7288" }}
            variant="outlined"
            fullWidth
            startIcon={<Upload />}
          >
            Upload an image (Max 2mb)
            <input hidden type="file" />
          </Button>

        </DialogContent>
        <Divider sx={{ bgcolor: "#11121D" }} />
        <DialogActions sx={{ padding: "0px" }}>
          <ButtonGroup fullWidth size='large' aria-label="outlined primary button group">
            <Button variant='flat' onClick={handleClose} style={{ textTransform: "none", borderRadius: "0px" }}>Cancel</Button>
            <Button variant='contained' onClick={handleClose} sx={{ textTransform: "none", borderRadius: "0px" }}>Create</Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </div>
  );
}