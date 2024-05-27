// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Container,
//   Grid,
//   Avatar,
//   CardHeader,
//   IconButton,
//   Box,
//   Button,
//   Divider,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import { deepPurple } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import CommentIcon from '@mui/icons-material/Comment';
// import ShareIcon from '@mui/icons-material/Share';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';

// // Styled components
// const StyledContainer = styled(Container)(({ theme }) => ({
//   marginTop: theme.spacing(4),
//   display: 'flex',
// }));

// const StyledCard = styled(Card)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   marginRight: theme.spacing(5),
// }));

// const StyledAvatar = styled(Avatar)({
//   backgroundColor: deepPurple[500],
// });

// const StyledHeader = styled(CardHeader)(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

// const StyledTitle = styled(Typography)({
//   fontWeight: 'bold',
// });

// const StyledBody = styled(Typography)(({ theme }) => ({
//   marginTop: theme.spacing(1),
// }));

// const UserList = ({ users }) => (
//   <Box mr={4}>
//     <Typography variant="h6" gutterBottom>
//       Add Friends
//     </Typography>
//     {users.map(user => (
//       <Box key={user.id} display="flex" alignItems="center"  sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '4px', padding: '10px', marginBottom: '10px' }}>
//         <Avatar sx={{ bgcolor: deepPurple[500], width: 40, height: 40, marginRight: 2 }}>
//           {user.name.charAt(0)}
//         </Avatar>
//         <Typography sx={{ marginRight: 2 }} variant="subtitle1">{user.name}</Typography>
//         <Button variant="noned" size="small" startIcon={<PersonAddIcon sx={{ color: deepPurple[500] }} />} aria-label="Add Friend" />
//       </Box>
//     ))}
//   </Box>
// );


// const ActionButtonContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
// }));

// const ActionButton = styled(IconButton)(({ theme }) => ({
//   marginRight: theme.spacing(1),
// }));

// const Timeline = () => {
//   const [posts, setPosts] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch posts
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         const sortedPosts = response.data.sort((a, b) => b.id - a.id);
//         setPosts(sortedPosts);
//       })
//       .catch(error => console.error('Error fetching posts:', error));

//     // Fetch users
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => setUsers(response.data))
//       .catch(error => console.error('Error fetching users:', error));
//   }, []);

//   // Dummy logged-in user
//   const loggedInUser = users[1] || { name: 'John Doe', email: 'john.doe@example.com' };

//   const getUserName = (userId) => {
//     const user = users.find(user => user.id === userId);
//     return user ? user.name : 'Unknown User';
//   };

//   const getUserAvatar = (userId) => {
//     const user = users.find(user => user.id === userId);
//     return user ? user.name.charAt(0) : '?';
//   };

//   return (
//     <StyledContainer>
//       <UserList users={users} />
//       <Divider orientation="vertical" flexItem />
//       <Box flexGrow={1}>
//         <Grid container spacing={4}>
//           {posts.map(post => (
//             <Grid item xs={12} key={post.id}>
//               <StyledCard>
//                 <StyledHeader
//                   avatar={
//                     users.find(user => user.id === post.userId) ? (
//                       <StyledAvatar>
//                         {getUserAvatar(post.userId)}
//                       </StyledAvatar>
//                     ) : null
//                   }
//                   title={getUserName(post.userId)}
//                   subheader={`Post ID: ${post.id}`}
//                 />
//                 <CardContent>
//                   <StyledTitle variant="h6" component="h2">
//                     {post.title}
//                   </StyledTitle>
//                   <StyledBody variant="body1" color="textSecondary" component="p">
//                     {post.body}
//                   </StyledBody>
//                   <ActionButtonContainer mt={2}>
//                     <ActionButton aria-label="like">
//                       <FavoriteIcon />
//                     </ActionButton>
//                     <ActionButton aria-label="comment">
//                       <CommentIcon />
//                     </ActionButton>
//                     <ActionButton aria-label="share">
//                       <ShareIcon />
//                     </ActionButton>
//                   </ActionButtonContainer>
//                 </CardContent>
//               </StyledCard>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box display="flex" flexDirection="column" alignItems="center" mt={2} mb={2} sx={{ flexGrow: 1, padding: 2, height: '100%', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//         <Avatar sx={{ bgcolor: deepPurple[500], width: 56, height: 56, mb: 2 }}>
//           {loggedInUser.name.charAt(0)}
//         </Avatar>
//         <Typography variant="h6">{loggedInUser.name}</Typography>
//         <Typography variant="body2" color="textSecondary">{loggedInUser.email}</Typography>
//       </Box>
//     </StyledContainer>
//   );
// };

// export default Timeline;
