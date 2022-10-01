import * as React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

import {
  Avatar,
  Typography,
  Container,
  Card,
  Stack,
  Button,
  Grid,
  List,
  Box,
} from '@mui/material';

export default function Edit() {
  const [id, setID] = useState('');

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  const [avatarUrl, setAvatar] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    setID(JSON.stringify(localStorage.getItem('ID')).replace(/"/g, ''));
    setName(JSON.stringify(localStorage.getItem('Name')).replace(/"/g, ''));
    setCompany(
      JSON.stringify(localStorage.getItem('Company')).replace(/"/g, '')
    );
    setStatus(JSON.stringify(localStorage.getItem('Status')).replace(/"/g, ''));
    setAvatar(
      JSON.stringify(localStorage.getItem('AvatarUrl')).replace(/"/g, '')
    );
    setRole(JSON.stringify(localStorage.getItem('Role')).replace(/"/g, ''));
    console.log(localStorage.getItem('Role'));
  }, []);

  const updateDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios.put(`https://6332e514573c03ab0b5340cd.mockapi.io/api/v1/users/1`, {
      name,
      company,
      status,
      avatarUrl,
      role,
    });
  };
  return (
    <Container>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Avatar URL"
            value={avatarUrl}
            onChange={(e) => setAvatar(e.target.value)}
          />{' '}
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          {' '}
          <Button onClick={updateDate} type="submit">
            Submit
          </Button>
        </div>
      </Box>
    </Container>
  );
}
