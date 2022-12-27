import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormDialog from '../pages/modal/createcrumbs';
import Switch from '@mui/material/Switch';
import { grey } from '@mui/material/colors'

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }} >
                <AssignmentIcon sx={{ color: grey[500] }} />
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }} >
                <SearchIcon sx={{ color: grey[500] }} />
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }} >
                <FavoriteBorderIcon sx={{ color: grey[500] }} />
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }} >
                <DeleteOutlineIcon sx={{ color: grey[500] }} />
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }} >
                <NotificationsNoneOutlinedIcon sx={{ color: grey[500] }} />
            </ListItemIcon>
        </ListItemButton>
    </React.Fragment>
);

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton onClick={FormDialog}>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }} >
                <AddCircleIcon sx={{ color: grey[500] }} />
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }} >
                <AccountCircleIcon sx={{ color: grey[500] }} />
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }} >
                <Switch {...label} defaultChecked />
            </ListItemIcon>
        </ListItemButton>
    </React.Fragment>
);