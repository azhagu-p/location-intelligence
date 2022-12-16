import React from 'react';
import './Editprofile.css';
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import DoneIcon from '@mui/icons-material/Done';
import user from '../../assets/user.jpg'
import email from '../../assets/email.png'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Uicon from '../../assets/user.png'
import SMS from '../../assets/sms.png'
import Officeicon from '../../assets/building-4.png'
import Lock from '../../assets/svg/lock.svg'
import Link from "@mui/material/Link";

export default class MultipleItems extends Component {
    render() {

        return (
            <div className='login2'>
                <div className='body'>
                    <div className='back'></div>
                    <div className='main'>
                        <div className='box'>
                            <img src={user} alt="" class="user_image" />
                            <TextField
                                label="Name"
                                focused
                                sx={{ m: 3 }}
                                type="text"
                                variant="standard"
                                InputLabelProps={{ style: { color: 'grey' } }}
                                InputProps={{
                                    style: { color: "white" },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={Uicon} alt="mail" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Email"
                                focused
                                sx={{ m: 3 }}
                                type="email"
                                variant="standard"
                                InputLabelProps={{ style: { color: 'grey' } }}
                                InputProps={{
                                    style: { color: "white" },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={SMS} alt="mail" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Company"
                                focused
                                sx={{ m: 3 }}
                                type="text"
                                variant="standard"
                                InputLabelProps={{ style: { color: 'grey' } }}
                                InputProps={{
                                    style: { color: "white" },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={Officeicon} alt="mail" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Password"
                                focused
                                sx={{ m: 3 }}
                                type="password"
                                variant="standard"
                                InputLabelProps={{ style: { color: 'grey' } }}
                                InputProps={{
                                    style: { color: "white" },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={Lock} alt="mail" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                    </div>

                </div>

            </div>

        );
    }
}