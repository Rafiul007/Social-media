import React from 'react';
import Timeline from './pages/Timeline/Timeline';
import Navbar from './components/navbar/Navbar';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Timeline />
    </>
  );
}

export default App;
