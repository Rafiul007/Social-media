import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Divider, Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import UserList from '../../components/userList/UserList';
import StyledCard from '../../components/Card/StyledCard';
import CreatePost from '../../components/CreatePost/CreatePost';
import { red } from '@mui/material/colors';
import './Timeline.css'; 

const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const sortedPosts = response.data.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);
      })
      .catch(error => console.error('Error fetching posts:', error));

    // Fetch users
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Dummy logged-in user
  const loggedInUser = users[1] || { name: 'John Doe', email: 'john.doe@example.com' };

  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unknown User';
  };

  const getUserAvatar = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name.charAt(0) : '?';
  };

  const addPost = (title, content) => {
    const newPost = {
      userId: loggedInUser.id,
      id: posts.length + 1,
      title,
      body: content
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <Container sx={{ marginTop: '50px' }}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Box sx={{ position: 'sticky', top: '90px' }}>
            <UserList users={users} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box mb={4}>
            <CreatePost addPost={addPost} />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box pl={4}>
            <Grid container spacing={4}>
              {posts.map(post => (
                <Grid item xs={12} key={post.id}>
                  <StyledCard
                    post={post}
                    userName={getUserName(post.userId)}
                    userAvatar={getUserAvatar(post.userId)}
                    loggedInUser={loggedInUser}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ position: 'sticky', top: '100px', pl: 3 }}>
            <Card sx={{  marginBottom: 4, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Avatar sx={{ bgcolor: red[500], width: 56, height: 56, mb: 2 }}>
                  {loggedInUser.name.charAt(0)}
                </Avatar>
                <Typography variant="h6">{loggedInUser.name}</Typography>
                <Typography variant="body2" color="textSecondary">Email: {loggedInUser.email}</Typography>
                <Typography variant="body2" color="textSecondary">Phone: {loggedInUser.phone}</Typography>
                <Typography variant="body2" color="textSecondary">Website: {loggedInUser.website}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Timeline;
