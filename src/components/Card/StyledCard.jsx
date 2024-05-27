import React from 'react';
import { Card, CardContent, Typography, Avatar, CardHeader, IconButton, Box } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const StyledCard = ({ post, userName, userAvatar, loggedInUser }) => (
      <Card sx={{ marginBottom: 4, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
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
                        <IconButton aria-label="like">
                              <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="comment">
                              <CommentIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                              <ShareIcon />
                        </IconButton>
                  </Box>
            </CardContent>
      </Card>
);

export default StyledCard;
