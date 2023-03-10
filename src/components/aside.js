import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { mainListItems, secondaryListItems } from './listitem';

function DashboardContent() {

    return (

        <Box sx={{ display: 'flex', background: '#010412' }}>
            <List component="nav" sx={{ background: '#010412' }} >
                {mainListItems}
                <Divider sx={{ mt: 40 }} />
                {secondaryListItems}
            </List>

            <Box
                component="main"
                sx={{
                    // backgroundImage: `url("https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
                    // backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover',
                    // flexGrow: 1,
                    // height: '100vh',
                }}
            >
                <img src='https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlkZGxlJTIwZWFzdCUyMG1hcHxlbnwwfHwwfHw%3D&w=1000&q=80' alt='map' />
            </Box>
        </Box>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}