import React from 'react';
import './Dashboard.css';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import user from '../../assets/user.jpg'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Upload from '@mui/icons-material/ImageOutlined';
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
    <div className='body'>
      <div className='back_layer'></div>
      <div className='left_bar'>
        <List sx={{ width: '100%' }} className="List">
          <ListItem className="ListItem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar className="Avatar">
                <ImageIcon className="ImageIcon" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className="ListItem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar className="Avatar">
                <ImageIcon className="ImageIcon" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className="ListItem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar className="Avatar">
                <ImageIcon className="ImageIcon" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </List>
        <br />
        <List sx={{ width: '100%', marginTop: '300px' }} className="List List2">
          <ListItem className="ListItem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar className="Avatar">
                <Button variant="contained" className='btn btn_plus' onClick={handleClickOpen} >+</Button>
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className="ListItem">
            <ListItemAvatar className="ListItemAvatar">
              <Avatar className="Avatar">
                <img src={user} alt="" className="user_image" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </List>
      </div>
      {/* --------------------------------------------Modal---------------------- */}

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

          </Button>
          <input hidden type="file" />
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