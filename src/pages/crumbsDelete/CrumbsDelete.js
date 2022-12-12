import React from 'react';
import './CrumbsDelete.css';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Component } from "react";
import icon_i from '../../assets/icon_i.png'

export default class MultipleItems extends Component {
  render() {

    return (
      <div className='login2'>
        <div className='body'>
          <div className='back'></div>
          <div className='main'>
            <div className='box'>
              <img src={icon_i} alt="" />
              <h3 className='box-title'>Confirm</h3>
              <p className='box-msg'>Are you sure you want  to delete the card?</p>
              <p className='box-msg'>Upon deletion the card will be moved to ‘Deleted’ folder and
                will remain there until the end of billingcycle.</p>
              <div className='btn-row'>
                <Button variant="contained" className="btn">Cancel</Button>
                <Button variant="contained" className="btn">Delete</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}