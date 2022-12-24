// import * as React from 'react';
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Divider from '@mui/material/Divider';
import Link from "@mui/material/Link";
import { InputLabel, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const labelId = `checkbox-list-label-${value}`;

    const [clicked, setClicked] = useState(true);

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                search audience
            </Button>
            <Dialog open={open} onClose={handleClose}
                PaperProps={{ sx: { width: "35%", backgroundColor: "#010412", color: "#FFFFFF", borderRadius: "0px" } }}
                sx={{
                    backdropFilter: "blur(2px)",
                }}
            >
                <TabContext value={value} >
                    <Box sx={{ borderColor: 'divider' }}>
                        <TabList variant='fullWidth' onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Upload" value="1" sx={{ textTransform: 'none', color: '#FFFFFF' }} />
                            <Tab label="Library" value="2" sx={{ textTransform: 'none', color: '#FFFFFF' }} />
                        </TabList>
                        <Divider sx={{ bgcolor: "#11121D" }} />
                    </Box>
                    <TabPanel value="1" sx={{ padding: "0px" }}>
                        <DialogContent sx={{ mx: 4 }}>
                            <TextField
                                InputProps={{
                                    style: { color: "white" }
                                }}
                                placeholder="Place Name (E.g. My NYC Stores)"
                                InputLabelProps={{
                                    style: { color: "#6F7288" }
                                }}
                                focused
                                id="name"
                                type="text"
                                variant="standard"
                                fullWidth
                                sx={{ my: 2 }}
                            />
                            <TextField
                                InputProps={{
                                    style: { color: "white" }
                                }}
                                placeholder="Places Categories (E.g. Coffee Shops)"
                                InputLabelProps={{
                                    style: { color: "#6F7288" }
                                }}
                                focused
                                id="standard-multiline-static"
                                type="text"
                                variant="standard"
                                fullWidth
                                sx={{ my: 2 }}
                            />
                            <Button
                                sx={{ my: 2, backgroundColor: "#0B0E24", height: "100px", textTransform: "none", color: "#6F7288", borderRadius: "0px" }}
                                variant="outlined"
                                fullWidth
                                startIcon={<AddCircleOutlineIcon />}
                            >
                                Click to browse and upload file (or) tab delimited file (.TXT)
                                <input hidden type="file" />
                            </Button>
                            <Typography align='center'>
                                <Link
                                    component="button"
                                    variant="body1"
                                    underline="hover"
                                    sx={{ color: "#3955BF", margin: "10px" }}>
                                    Download Sample CSV File
                                </Link>

                                <Link
                                    component="button"
                                    variant="body1"
                                    underline="hover"
                                    sx={{ color: "#3955BF", margin: "10px" }}>
                                    View Sample TXT File
                                </Link>
                            </Typography>

                            <Divider sx={{ bgcolor: "#11121D" }} variant="fullWidth" />

                            <InputLabel sx={{ color: "#6F7288", textAlign: "center", margin: "15px" }}>Pick your pin color</InputLabel>

                            {/* <List sx={{ display: 'flex', flexDirection: 'row' }}>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                        <ListItemIcon>
                                            <LocationOnIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LocationOnIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                        <ListItemIcon>
                                            <LocationOnIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                        <ListItemIcon>
                                            <LocationOnIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            </List> */}

                            <List sx={{ display: 'flex', flexDirection: 'row', padding: '0px' }}>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => setClicked(!clicked)} sx={{ display: 'flex', justifyContent: 'center' }}> {clicked ? <WhereToVoteIcon sx={{ color: "#1FB9FC" }} /> : <LocationOnIcon sx={{ color: "#1FB9FC" }} />} </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => setClicked(!clicked)} sx={{ display: 'flex', justifyContent: 'center' }}> {clicked ? <WhereToVoteIcon sx={{ color: "#FC6B21" }} /> : <LocationOnIcon sx={{ color: "#FC6B21" }} />} </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => setClicked(!clicked)} sx={{ display: 'flex', justifyContent: 'center' }}> {clicked ? <WhereToVoteIcon sx={{ color: "#39BF8F" }} /> : <LocationOnIcon sx={{ color: "#39BF8F" }} />} </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => setClicked(!clicked)} sx={{ display: 'flex', justifyContent: 'center' }}> {clicked ? <WhereToVoteIcon sx={{ color: "#FF0099" }} /> : <LocationOnIcon sx={{ color: "#FF0099" }} />} </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => setClicked(!clicked)} sx={{ display: 'flex', justifyContent: 'center' }}> {clicked ? <WhereToVoteIcon sx={{ color: "#1FB9FC" }} /> : <LocationOnIcon sx={{ color: "#1FB9FC" }} />}</ListItemButton>
                                </ListItem>
                            </List>

                        </DialogContent>
                        <Divider sx={{ bgcolor: "#11121D" }} />
                        <DialogActions sx={{ padding: "0px" }}>
                            <ButtonGroup fullWidth size='large' aria-label="outlined primary button group">
                                <Button variant='flat' onClick={handleClose} style={{ textTransform: "none", borderRadius: "0px" }}>Cancel</Button>
                                <Button variant='contained' onClick={handleClose} sx={{ textTransform: "none", borderRadius: "0px" }}>Save</Button>
                            </ButtonGroup>
                        </DialogActions>
                    </TabPanel>
                    <TabPanel value="2" sx={{ padding: "0px" }}>
                        <DialogContent sx={{ mx: 4 }}>
                            <TextField
                                InputProps={{
                                    style: { color: "white" }
                                }}
                                placeholder="Search your place"
                                InputLabelProps={{
                                    style: { color: "#6F7288" },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={WhereToVoteIcon} alt="mail" />
                                        </InputAdornment>
                                    ),
                                }}
                                focused
                                id="standard-multiline-static"
                                type="search"
                                variant="standard"
                                fullWidth
                                sx={{ my: 2 }}
                            />
                            <List sx={{ padding: '0px' }}>
                                <ListItem secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <LocationOnIcon sx={{ color: "#FC6B21" }} />
                                    </IconButton>
                                } disablePadding>
                                    <ListItemButton onClick={handleToggle(value)} dense>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                        <ListItemText id={labelId} primary="20 Places" secondary={
                                            <Typography color={'#6F7288'}>
                                                Mattress Firm
                                            </Typography>
                                        } />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <LocationOnIcon sx={{ color: "#FF0099" }} />
                                    </IconButton>
                                } disablePadding>
                                    <ListItemButton onClick={handleToggle(value)} dense>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />

                                        <ListItemText id={labelId} primary="5 Places" secondary={
                                            <Typography color={'#6F7288'}>
                                                Ikea Stores
                                            </Typography>
                                        } />

                                    </ListItemButton>
                                </ListItem>
                                <ListItem secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <LocationOnIcon sx={{ color: "#1FB9FC" }} />
                                    </IconButton>
                                } disablePadding>
                                    <ListItemButton onClick={handleToggle(value)} dense>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                        <ListItemText id={labelId} primary="20 Places" secondary={
                                            <Typography color={'#6F7288'}>
                                                Wall Street
                                            </Typography>
                                        } />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <LocationOnIcon sx={{ color: "#39BF8F" }} />
                                    </IconButton>
                                } disablePadding>
                                    <ListItemButton onClick={handleToggle(value)} dense>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                        <ListItemText id={labelId} primary="365 Places" secondary={
                                            <Typography color={'#6F7288'}>
                                                Shops in SF Bay Area
                                            </Typography>
                                        } />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <LocationOnIcon sx={{ color: "#39BF8F" }} />
                                    </IconButton>
                                } disablePadding>
                                    <ListItemButton onClick={handleToggle(value)} dense>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                        <ListItemText id={labelId} primary="96 Places" secondary={
                                            <Typography color={'#6F7288'}>
                                                Retails shops in San Francisco Bay Area
                                            </Typography>
                                        } />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </DialogContent>
                        <Divider sx={{ bgcolor: "#11121D" }} />
                        <DialogActions sx={{ padding: "0px" }}>
                            <ButtonGroup fullWidth size='large' aria-label="outlined primary button group">
                                <Button variant='flat' onClick={handleClose} sx={{ textTransform: "none", borderRadius: "0px" }}>Cancel</Button>
                                <Button variant='contained' onClick={handleClose} sx={{ textTransform: "none", borderRadius: "0px" }}>Load</Button>
                            </ButtonGroup>
                        </DialogActions>
                    </TabPanel>
                </TabContext>
            </Dialog>
        </div>
    );
}