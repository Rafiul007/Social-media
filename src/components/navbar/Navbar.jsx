import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import { AccountCircle, Notifications, Settings } from '@mui/icons-material'; 

const Navbar = () => (
  <AppBar position="sticky" sx={{ top: 0, zIndex: 999,background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }}>
    <Toolbar>
      <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Social Media Feed
        </Typography>
        <IconButton color="inherit">
          <Notifications /> 
        </IconButton>
        <IconButton color="inherit">
          <Settings /> 
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle /> 
        </IconButton>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Navbar;
