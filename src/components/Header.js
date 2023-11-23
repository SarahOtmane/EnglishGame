import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import logo from '../assets/pics/logo.png';

function Header() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => () => {
        setOpen(isOpen);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    const links = [
        { text: 'Home', path: '/' },
        { text: 'Start a game', path: '/startGame' },
    ];

    return (
        <header className='row'>
            {!open && (
                <IconButton onClick={toggleDrawer(true)} edge="start" className='menuIcon' aria-label="menu">
                    <MenuIcon />
                </IconButton>
            )}

            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} className='hiddenMenu'>
                <div>
                    {open && (
                        <IconButton onClick={toggleDrawer(false)} edge="start" className='closeIcon' aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    )}

                    <img src={logo} alt="Logo" className='logo' />
                </div>
                <List className='menu'>
                    {links.map((link, index) => (
                        <Link to={link.path} key={index}>
                            <ListItem button key={index}>
                                <ListItemText primary={link.text} onClick={toggleDrawer(false)} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>

            <img src={logo} alt="Logo" className='logo' />
        </header>
    );
}

export default Header;
