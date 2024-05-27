import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Box } from '@mui/material';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch post
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        // Fetch user
        axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
          .then(userResponse => setUser(userResponse.data))
          .catch(error => console.error('Error fetching user:', error));
      })
      .catch(error => console.error('Error fetching post:', error));

    // Fetch comments
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [postId]);

  if (!post || !user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ marginTop: '50px' }}>
      <Card sx={{ marginBottom: 4, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            {post.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" sx={{ marginBottom: 2 }}>
            {post.body}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Posted by: {user.name} ({user.email})
          </Typography>
        </CardContent>
      </Card>
      <Box>
        <Typography variant="h6" gutterBottom>Comments:</Typography>
        {comments.map(comment => (
          <Card key={comment.id} sx={{ marginBottom: 2, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="subtitle1" component="h3">
                {comment.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {comment.body}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {comment.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default PostDetails;
