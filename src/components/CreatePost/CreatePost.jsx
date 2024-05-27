// src/components/CreatePost/CreatePost.js

import React, { useState } from 'react';
import { Box, TextField, Button, Card, CardContent, Typography } from '@mui/material';

const CreatePost = ({ addPost }) => {
  const [postContent, setPostContent] = useState('');

  const handlePostChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePostSubmit = () => {
    if (postContent.trim() !== '') {
      addPost(postContent);
      setPostContent('');
    }
  };

  return (
    <Card sx={{ marginBottom: 4, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Create Post</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={handlePostChange}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handlePostSubmit}>Post</Button>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
