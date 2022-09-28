import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Checkbox, Button } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Edit() {
  const [id, setID] = useState(null);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  const [avatarUrl, setAvatar] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    setID(JSON.parse(localStorage.getItem('ID') || '{}'));
    setName(JSON.parse(localStorage.getItem('Name') || '{}'));
    setCompany(JSON.parse(localStorage.getItem('Company') || '{}'));
    setStatus(JSON.parse(localStorage.getItem('Status') || '{}'));
    setAvatar(JSON.parse(localStorage.getItem('AvatarUrl') || '{}'));
    setRole(JSON.parse(localStorage.getItem('Role') || '{}'));
  }, []);

  const updateDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios.put(
      `https://6332e514573c03ab0b5340cd.mockapi.io/api/v1/users/${id}`,
      {
        name,
        company,
        status,
        avatarUrl,
        role,
      }
    );
  };
  return (
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
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Avatar URL"
          onChange={(e) => setAvatar(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Role"
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
  );
}
