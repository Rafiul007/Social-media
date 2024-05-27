import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, CardHeader, IconButton, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deepPurple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const StyledCard = ({ post, userName, userAvatar, loggedInUser }) => {
  const [liked, setLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (event) => {
    // Prevent event propagation
    event.stopPropagation();
    setComment(event.target.value);
  };
  

  const handleCommentSubmit = () => {
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);
    // Clear comment input field
    setComment('');
  };

  const handleCommentSectionClick = () => {
    navigate(`/post/${post.id}`);
  };

  const handleCardClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <Card onClick={handleCardClick} sx={{ marginBottom: 4, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{userAvatar}</Avatar>}
        title={userName}
        subheader={`Post ID: ${post.id}`}
        sx={{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}
      />
      <CardContent>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          {post.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {post.body}
        </Typography>
        <Box display="flex" alignItems="center" mt={2}>
          <IconButton aria-label="like" onClick={(e) => { e.stopPropagation(); handleLikeClick(); }}>
            <FavoriteIcon sx={{ color: liked ? red[500] : 'inherit' }} />
          </IconButton>
          <IconButton aria-label="comment" onClick={(e) => { e.stopPropagation(); handleCommentClick(); }}>
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={(e) => e.stopPropagation()}>
            <ShareIcon />
          </IconButton>
        </Box>
        {showCommentInput && (
          <Box mt={2} onClick={(e) => e.stopPropagation()} sx={{ cursor: 'pointer' }}>
          <TextField
            label="Add a comment"
            variant="outlined"
            fullWidth
            value={comment}
            onChange={handleCommentChange}
          />
          <Button variant="contained"  onClick={handleCommentSubmit} sx={{ mt: 1 ,background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}>
            Submit
          </Button>
        </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default StyledCard;
