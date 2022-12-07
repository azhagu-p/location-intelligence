import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import '../crumbsDelete/CrumbsDelete.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Forgotpassword</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='login2'>
          <div className='body'>

            <div className='main'>
              <div className='box'>

                <h3 className='box-title'>Confirm</h3>
                <p className='box-msg'>Are you sure you want  to delete the card?</p>
                <p className='box-msg'>Upon deletion the card will be moved to ‘Deleted’ folder and
                  will remain there until the end of billingcycle.</p>
                <div className='btn-row'>
                  <Button onClick={handleClose} variant="contained" className="btn">Cancel</Button>
                  <Button variant="contained" className="btn">Delete</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Modal>
    </div>
  );
}