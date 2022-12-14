import React from 'react';
import './Profile.css';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Component } from "react";

import DoneIcon from '@mui/icons-material/Done';
import user from '../../assets/user.jpg'
import email from '../../assets/email.png'
import company from '../../assets/company.png'
import uae from "../../assets/c_uae.png";
import qatar from "../../assets/c_qatar.png";
import usa from "../../assets/c_usa.png";
import ksa from "../../assets/c_ksa.png";
import esp from "../../assets/c_esp.png";

export default class MultipleItems extends Component {
  render() {

    return (
    <div className='login2'>
      <div className='body'>
          <div className='back'></div>
          <div className='main'>
              <div className='box'>
                <img src={user} alt="#" class="user_image" />
                <p className='user_name'>Santhosh</p>
                <p className='user_text user_text_white'>Personal Information</p>
                <div className='pxy_20 ptb_20 m_50'>
                  <h4 className='user_text user_text_white text_left'>Personal Information</h4>
                  <div className='table_row mt_5'>
                    <div className='table_row_column float_left'>
                      <img src={email} alt="#" class="" />
                      <p className='table_image_text'>Email</p>
                    </div>
                    <div className='table_row_column float_left'>
                      <p className='table_image_text_value'>santhosh.r@memob.com</p>
                    </div>
                  </div>
                  <div className='table_row mt_5'>
                    <div className='table_row_column float_left'>
                      <img src={company} alt="#" class="" />
                      <p className='table_image_text'>Company</p>
                    </div>
                    <div className='table_row_column float_left'>
                      <p className='table_image_text_value'>MEmob</p>
                    </div>
                  </div>
                </div>
                <div className='table_row flag_list_row'>
                  <span className='flag_list'><img src={ksa} /><span className='flag_list_name'>KSA</span></span>
                  <span className='flag_list'><img src={esp} /><span className='flag_list_name'>ESP</span></span>
                  <span className='flag_list'><img src={uae} /><span className='flag_list_name'>UAE</span></span>
                  <span className='flag_list'><img src={qatar} /><span className='flag_list_name'>QATAR</span></span>
                  <span className='flag_list'><img src={usa} /><span className='flag_list_name'>USA</span></span>
                </div>
                <div className='btn-rows'>
                <Button variant="contained"className="btn mt_20">Edit Profile</Button>
                <h4>Have questions?</h4>
                <p className='box-msg'>Please contact us for any inquiry or feedback about our platform and our team will promptly respond.</p>
                <Button variant="contained"className="btn">Edit Profile</Button>
                </div>
              </div>
          </div>
        </div>
      
    </div>
    );
  }
}