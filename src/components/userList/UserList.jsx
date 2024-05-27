import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { deepPurple, red } from '@mui/material/colors';

const UserList = ({ users }) => (
  <Box mr={4} >
    <Typography variant="h6" gutterBottom>
      Add Friends
    </Typography>
    {users.slice(0, 7).map(user => (
      <Box key={user.id} display="flex" alignItems="center" sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '4px', padding: '10px', marginBottom: '10px' }}>
        <Avatar sx={{ bgcolor: red[500], width: 40, height: 40, marginRight: 2 }}>{user.name.charAt(0)}</Avatar>
        <Typography sx={{ marginRight: 2 }} variant="subtitle1">{user.name}</Typography>
        <Button variant="none"  size="large" startIcon={<PersonAddIcon />} aria-label="Add Friend" />
      </Box>
    ))}
  </Box>
);

export default UserList;
