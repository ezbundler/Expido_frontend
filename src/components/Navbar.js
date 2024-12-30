import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import logo from "../images/navLogo.png";
import ThemeToggle from './ThemeToggler';

const Logo = styled.img`
  height: 80px;
//   width: auto;
  cursor: pointer;
`;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar position="static" className="bg-slate-400 dark:bg-black justify-center dark:border-b-4 border-orange-500" sx={{height:"5rem"}}>
        <Toolbar className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <Logo className="w-24  " src={logo} alt="Navbar Logo" />
          </Link>

          {/* Links (hidden on small screens) */}
          {!isSmallScreen && (
            <div className="flex gap-4 items-center">
              <Link to="/" className="text-white">Home</Link>
              <Link to="/contact" className="text-white">Contact</Link>
              <Link to="/login" className="text-white">Login</Link>
              <Link to="/signup" className="text-white">Sign Up</Link>
              <ThemeToggle />
            </div>
          )}

          {/* Hamburger Menu (visible on small screens) */}
          {isSmallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Hamburger Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="w-[250px] h-full flex flex-col justify-between bg-black text-white p-5">
          {/* Close Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={toggleDrawer(false)}
            className="self-end"
          >
            <CloseIcon />
          </IconButton>

          {/* Drawer Links */}
          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/signup" onClick={toggleDrawer(false)}>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </List>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
