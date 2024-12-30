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
  height: 100px;
//   width: auto;
  cursor: pointer;
`;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <nav  className="bg-slate-500 dark:bg-black justify-center border-b-4 dark:border-blue-600
       items-center dark:border-b-4 border-orange-500" sx={{height:"5rem"}}>
        <div className="flex lg:w-3/4 w-full justify-between px-4 items-center  ">
          {/* Logo */}
          <Link to="/">
            <Logo className="w-40  " src={logo} alt="Navbar Logo" />
          </Link>

          
          
            <div className="flex gap-4 items-center">
             
              <ThemeToggle />
            </div>
         

          {/* Hamburger Menu (visible on small screens) */}
          {/* {isSmallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )} */}
        </div>
      </nav>

      {/* Drawer for Hamburger Menu */}
      {/* <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="w-[250px] h-full flex flex-col justify-between bg-black text-white p-5">
          
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={toggleDrawer(false)}
            className="self-end"
          >
            <CloseIcon />
          </IconButton>

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

          <ThemeToggle />
        </div>
      </Drawer> */}
    </>
  );
};

export default Navbar;
