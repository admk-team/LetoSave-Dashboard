
// export default PatientNew
import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Badge, Divider, Stack } from '@mui/material';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Logo from "../Components/Assets/Icons/Group 329.png"
import iconnoone from "../Components/Assets/Icons/dashboard.png"
import Patient from "../Components/Assets/Icons/patient.png"
import Customer from "../Components/Assets/Icons/customer-service.png"
import Ellips from "../Components/Assets/Icons/Icon.png"
import Layer from "../Components/Assets/Icons/Layer_x0020_1.png"
import report from "../Components/Assets/Icons/report.png"
import logout from "../Components/Assets/Icons/logout.png"
import { Link } from 'react-router-dom';
import PatientReportComponent from '../Components/PatientReportComponent';
import LogoutModal from '../Components/LogoutModal';
import { Helmet, HelmetProvider } from 'react-helmet-async';







const drawerWidth = 280;


const PatientNew = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [open, setOpen] = useState(window.innerWidth >= 1026);
    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 1026);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.addEventListener('resize', handleResize);
        };

    }, []);
    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleLogoutClose = () => {
        setShowLogoutModal(false);
    };

    const handleLogoutConfirm = () => {
        // Perform actual logout action here
        // For example: Redirect to logout page or clear session

        // Close the modal after logout
        setShowLogoutModal(false);
    };

    return (
        <>
         <HelmetProvider>
            <Helmet>
                <title>LetoSave | Patient-report</title>
            </Helmet>
        </HelmetProvider>
            <div style={{ display: 'contents' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ marginLeft: open ? drawerWidth : 0, width: `calc(100% - ${open ? drawerWidth : 0}px)` }} style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
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
                            Patient Report
                        </Typography>

                        <Stack spacing={4} direction="row" sx={{ color: 'action.active', marginLeft: 'auto' }}>
                            <Link className="nav-link" to="/Support/Chart-Management">
                                <Badge color="secondary" badgeContent={0}>
                                    <MailIcon sx={{ fontSize: 23, color: '#FF7070' }} style={{ marginTop: "10px" }} />
                                </Badge>
                            </Link>
                            <Link to="/Notification" >
                                <Badge color="secondary" showZero>
                                    <NotificationsRoundedIcon sx={{ fontSize: 25, }} className='mt-2' />
                                </Badge>
                            </Link>
                            <Badge color="secondary" showZero>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Link to="/Profile" className='ms-3' style={{ textDecoration: "none", color: "black" }}><h6 className='admin-name'>Flexi Health</h6><p className='Adin'>Admin</p></Link>                        </Badge>

                        </Stack>
                    </Toolbar>

                </AppBar>

                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={open}
                    sx={{
                        width: 0,
                        flexShrink: 0,


                        '& .MuiDrawer-paper': {
                            bgcolor: "#064FB8",
                            color: "white",
                            width: drawerWidth,

                        },
                    }}

                >
                    <Link className="nav-link" to="/">
                        <div className='d-flex justify-content-center' style={{ backgroundColor: "#0749A8", paddingTop: "13px" }}>
                            <img src={Logo} alt='' style={{ width: '35px', height: "35px" }}></img>
                            <h1 className='fw-bold ms-2' style={{ fontSize: "1.8em", color: "white", letterSpacing: '3px' }}>
                                LetoSave
                            </h1>
                        </div>
                    </Link>
                    <Divider />
                    <List >
                        {/* {['Dashboard', 'Patient Management', 'Deposits Management', 'Service Management', 'Support / Chart', 'Reports', 'Logout'].map((text, index) => ( */}
                        <ListItem>
                            <img src={iconnoone} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/">
                                <ListItemText primary='Dashboard' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={Patient} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/patient-Management">
                                <ListItemText primary='Patient Management' />
                            </Link>
                        </ListItem>

                        <ListItem>
                            <img src={Ellips} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/Deposite-Management">
                                <ListItemText primary='Deposits Management' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={Customer} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/service-Management">
                                <ListItemText primary='Service Management' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={Layer} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/Support/Chart-Management">
                                <ListItemText primary='Support / Chart' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={report} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/Reports-Management">
                                <ListItemText primary='Reports' />
                            </Link>
                        </ListItem>
                        <ListItem className='cursor-pointer'>
                            <img src={logout} className='me-3' alt=''></img>

                            <ListItemText primary='Logout' onClick={handleLogoutClick} />

                        </ListItem>
                        {/* ))} */}

                    </List>


                </Drawer>

                <main style={{ flexGrow: 1, marginLeft: open ? drawerWidth : 0, backgroundColor: 'wheate' }}>


                    <PatientReportComponent />
                    <LogoutModal show={showLogoutModal} onClose={handleLogoutClose} onLogout={handleLogoutConfirm} />
                </main>
            </div>
        </>
    );
};

export default PatientNew;
