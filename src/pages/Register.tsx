import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Checkbox, Button } from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  const [avatarUrl, setAvatar] = useState('');
  const [role, setRole] = useState('');

  const postData = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios.post(`https://6332e514573c03ab0b5340cd.mockapi.io/api/v1/users`, {
      name,
      company,
      status,
      avatarUrl,
      role,
    });
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
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </div>
    </Box>
  );
}
