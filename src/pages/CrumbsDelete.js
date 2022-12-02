import React from 'react';
import ReactDOM from 'react-dom';
import './CrumbsDelete.css';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import CircleIcon from '@mui/icons-material/Circle';
import "slick-carousel/slick/slick-theme.css";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import { Component } from "react";
import Slider from "react-slick";
import icon_i from '../assets/icon_i.png'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      className: "center",
      centerMode: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
    <div className='login2'>
      <div className='body'>
          <div className='back'></div>
          <div className='main'>
              <div className='box'>
                <img src={icon_i}/>
                <h3 className='box-title'>Confirm</h3>
                <p className='box-msg'>Are you sure you want  to delete the card?</p>
                <p className='box-msg'>Upon deletion the card will be moved to ‘Deleted’ folder and
will remain there until the end of billingcycle.</p>
                <div className='btn-row'>
                  <Button variant="contained"className="btn">Cancel</Button>
                  <Button variant="contained"className="btn">Delete</Button>
                </div>
              </div>
          </div>
        </div>
      
    </div>
    );
  }
}