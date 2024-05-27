// src/components/CreatePost/CreatePost.js

import React, { useState } from 'react';
import { Box, TextField, Button, Card, CardContent, Typography } from '@mui/material';

const CreatePost = ({ addPost }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const handleTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePostSubmit = () => {
    if (postTitle.trim() !== '' && postContent.trim() !== '') {
      addPost(postTitle, postContent);
      setPostTitle('');
      setPostContent('');
    }
  };

  return (
    <Card sx={{ marginBottom: 4, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Create Post</Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Title"
          value={postTitle}
          onChange={handleTitleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={handleContentChange}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }} onClick={handlePostSubmit}>Post</Button>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
