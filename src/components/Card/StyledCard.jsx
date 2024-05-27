import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, CardHeader, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deepPurple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const StyledCard = ({ post, userName, userAvatar, loggedInUser }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCardClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <Card onClick={handleCardClick} sx={{ marginBottom: 4, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: deepPurple[500] }}>{userAvatar}</Avatar>}
        title={userName}
        subheader={`Post ID: ${post.id}`}
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
          <IconButton aria-label="comment" onClick={(e) => e.stopPropagation()}>
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={(e) => e.stopPropagation()}>
            <ShareIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StyledCard;
