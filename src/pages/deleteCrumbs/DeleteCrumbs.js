import React from 'react';
import './DeleteCrumbs.css';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Component } from "react";

import DoneIcon from '@mui/icons-material/Done';

export default class MultipleItems extends Component {
  render() {

    return (
    <div className='login2'>
      <div className='body'>
          <div className='back'></div>
          <div className='main'>
              <div className='box'>
                <DoneIcon  color='white'className='icon-tik'></DoneIcon>
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