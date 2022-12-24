import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgAvatar from '../../assets/Ellipse 313.png'
import { AccountCircleRounded } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { InputLabel } from '@mui/material';
import { color } from '@mui/system';
import FormLabel from '@mui/material/FormLabel';
import mail from "../../assets/svg/sms.svg";
import InputAdornment from "@mui/material/InputAdornment";
import Compicon from "../../assets/building-4.png"
import esp from "../../assets/c_esp.png"
import Stack from '@mui/material/Stack';

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

            <Chip label="Enterprise" variant="contained" color='primary' />
            <br />
            <Chip label="Personal Inforamtion" component="h1" variant="contained"
                sx={{ color: "#FFFFFF", backgroundColor: "#090C19" }}
            />

            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Typography component="h3" variant="contained" color={'#FFFFFF'} >
                    Cameron Williamson
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="email"
                            name="lastName"
                            value={'Email'}
                            variant="outlined"
                            sx={{ border: 'none', "& fieldset": { border: 'none' } }}
                            InputProps={{
                                style: { color: "#6F7288" },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={mail} alt="mail" />
                                    </InputAdornment>
                                )
                            }}
                            inputProps={
                                { readOnly: true, }
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="email"
                            name="lastName"
                            value={'i.etyaman@memob,com'}
                            variant="outlined"
                            sx={{ border: 'none', "& fieldset": { border: 'none' } }}
                            InputProps={{
                                style: { color: "#FFFFFF" }
                            }}
                            inputProps={
                                { readOnly: true, }
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="company"
                            name="lastName"
                            value={'Company'}
                            variant="outlined"
                            sx={{ border: 'none', "& fieldset": { border: 'none' } }}
                            InputProps={{
                                style: { color: "#6F7288" },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={Compicon} alt="companyicon" />
                                    </InputAdornment>
                                )
                            }}
                            inputProps={
                                { readOnly: true, }
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="company"
                            name="lastName"
                            value={'MEmob'}
                            variant="outlined"
                            sx={{ border: 'none', "& fieldset": { border: 'none' } }}
                            InputProps={{
                                style: { color: "#FFFFFF" }
                            }}
                            inputProps={
                                { readOnly: true, }
                            }
                        />
                    </Grid>
                    <Stack direction="row">
                        <List sx={{ display: 'flex', flexDirection: 'row', padding: '0px' }}>
                            <ListItem disablePadding>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItem>
                            <ListItem disablePadding>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItem>
                            <ListItem disablePadding>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItem>
                            <ListItem disablePadding>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItem>
                            <ListItem disablePadding>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
            </Box>
        </Box>

    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>profile</Button>
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