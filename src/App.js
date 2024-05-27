import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timeline from './pages/Timeline/Timeline';
import Navbar from './components/navbar/Navbar';
import { CssBaseline } from '@mui/material';
import PostDetails from './pages/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Timeline />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
