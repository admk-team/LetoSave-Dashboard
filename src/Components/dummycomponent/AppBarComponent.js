import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const CustomAppBar = ({ open, handleDrawerToggle }) => {
    return (
        <AppBar
            position="fixed"
            sx={{ marginLeft: open ? drawerWidth : 0, width: `calc(100% - ${open ? drawerWidth : 0}px)` }}
            style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    sx={{ mr: 2, ...(open && {}) }}
                    style={{ width: '1.5em', height: '2em' }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap component="div" className='d-none d-lg-block'>
                    Dashboard
                </Typography>

                <Stack spacing={4} direction="row" sx={{ color: 'action.active', marginLeft: 'auto' }}>
                    <Badge color="secondary" badgeContent={0}>
                        <MailIcon sx={{ fontSize: 23, color: '#FF7070' }} style={{ marginTop: "10px" }} />
                    </Badge>
                    <Link to="/Notification" className='text-decoration-none'>
                        <Badge color="secondary" showZero>
                            <NotificationsRoundedIcon sx={{ fontSize: 25, }} className='mt-2' />
                        </Badge>
                    </Link>
                    <Badge color="secondary" showZero>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Link to="/Profile" className='ms-3' style={{ textDecoration: "none", color: "black" }}>Flexi Health<p className='Adin'>Admin</p></Link>
                    </Badge>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;
