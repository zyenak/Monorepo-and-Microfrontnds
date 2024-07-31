// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        username,
        password,
      });
      if (response.status === 200) {
      
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default HomePage;
