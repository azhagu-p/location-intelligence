import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AccountCircleRounded } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import mail from "../../assets/svg/sms.svg";
import InputAdornment from "@mui/material/InputAdornment";
import Compicon from "../../assets/building-4.png"
import Stack from '@mui/material/Stack';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

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

            <Chip label="Enterprise" variant="contained" color='primary' spacing={10} />

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
                    <Grid item xs={6} >
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
                    <Grid item xs={6} >
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6} >
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
                        <List sx={{ display: 'flex', flexDirection: 'row' }}>
                            <ListItem disablePadding>
                                <Avatar>
                                    <FlagCircleIcon />
                                </Avatar>
                                <ListItemText sx={{ padding: "10px", color: "#6F7288" }}>KSA</ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <Avatar>
                                    <FlagCircleIcon />
                                </Avatar>
                                <ListItemText sx={{ padding: "10px", color: "#6F7288" }}>ESP</ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <Avatar>
                                    <FlagCircleIcon />
                                </Avatar>
                                <ListItemText sx={{ padding: "10px", color: "#6F7288" }}>QATAR</ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <Avatar>
                                    <FlagCircleIcon />
                                </Avatar>
                                <ListItemText sx={{ padding: "10px", color: "#6F7288" }}>UAE</ListItemText>
                            </ListItem>
                        </List>
                    </Stack>
                    <Grid
                        item
                        container
                        alignItems="center"
                        justifyContent="center"
                        margin={'50px'}
                    >
                        <Button variant='contained' sx={{ textTransform: "none" }} onClick={toggleDrawer(anchor, false)}>Edit Profile</Button>
                        <Typography variant="h5" color={'#FFFFFF'} >
                            Have questions?
                            <Typography variant="body2" color={'#FFFFFF'} >
                                Please contact us for any inquiry or feedback about our platform and our team will promptly respond.
                            </Typography>
                        </Typography>
                        <Button variant='contained' color='warning' sx={{ textTransform: "none" }}>Contact us</Button>
                    </Grid>
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