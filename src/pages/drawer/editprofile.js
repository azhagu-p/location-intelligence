import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { AccountCircleRounded } from '@mui/icons-material';
import InputAdornment from "@mui/material/InputAdornment";
import Uicon from '../../assets/user.png'
import SMS from '../../assets/sms.png'
import Officeicon from '../../assets/building-4.png'
import Lock from '../../assets/svg/lock.svg'
import Link from '@mui/material/Link';

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (


        <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar
                sx={{ bgcolor: 'secondary.main', width: 100, height: 100 }}
            >
                <AccountCircleRounded />
            </Avatar>

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

            <Link href="#" underline="none">
                {'Change Password'}
            </Link>

            <Button variant='contained' color='warning' sx={{ textTransform: "none" }}>Update Profile</Button>
          
        </Box>

    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>edit profile</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        PaperProps={{
                            sx: {
                                backgroundColor: "#010412", width: "33%"
                            }
                        }}
                        sx={{
                            backdropFilter: "blur(2px)",
                        }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}