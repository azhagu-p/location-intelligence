import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Upload from '@mui/icons-material/ImageOutlined';
import Gallery from '../../assets/gallery-add.png';
import Stack from '@mui/material/Stack';
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
      <img src={Gallery} alt="some example " />
      <Button variant="outlined" onClick={handleClickOpen}>
        create new crumb
      </Button>
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { width: "30%", backgroundColor: "#010412", color: "white" } }}>
        <DialogTitle textAlign="center">Create A New Crumb</DialogTitle>
        <Divider sx={{ bgcolor: "grey" }} />
        <DialogContent >
          <TextField
            InputProps={{
              style: { color: "white", borderBlockColor: "white" }
            }}
            placeholder="Crumbs Name ( e.g. Coffee Lovers - NYC )"
            InputLabelProps={{ style: { color: "grey" } }}
            focused
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ my: 2 }}
          />
          <TextField
            InputProps={{
              style: { color: "white", borderBlockColor: "white" }
            }}
            placeholder="Description"
            InputLabelProps={{ style: { color: "grey" } }}
            focused
            id="standard-multiline-static"
            multiline
            rows={3}
            variant="standard"
            fullWidth
            sx={{ my: 2 }}
          />
          <Button
            sx={{ my: 2, backgroundColor: "#0B0E24", height: "100px", textTransform: "none", color: "grey" }}
            variant="outlined"
            fullWidth
            startIcon={<Upload />}
          >
            Upload an image (Max 2mb)
            <input hidden type="file" />
          </Button>
        </DialogContent>
        <DialogActions>
          <Stack direction="row">
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Create</Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}