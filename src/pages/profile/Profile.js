import React from 'react';
import './Profile.css';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Component } from "react";

import DoneIcon from '@mui/icons-material/Done';
import user from '../../assets/user.jpg'

export default class MultipleItems extends Component {
  render() {

    return (
    <div className='login2'>
      <div className='body'>
          <div className='back'></div>
          <div className='main'>
              <div className='box'>
                <img src={user} alt="" class="user_image" />
                <p className='user_name'>Santhosh</p>
                <p className='user_text user_text_white'>Personal Information</p>
                <div className='pxy_20 ptb_20'>
                  <h4 className='user_text user_text_white text_left'>Personal Information</h4>
                </div>
                <p className='box-msg'>Card has been deleted</p>
                <div className='btn-row'>
                  <Button variant="contained"className="btn">Cancel</Button>
                  <Button variant="contained"className="btn">Ok</Button>
                </div>
              </div>
          </div>
        </div>
      
    </div>
    );
  }
}