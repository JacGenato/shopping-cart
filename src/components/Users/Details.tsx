import React, { useState, useEffect } from 'react';

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

const Details = () => {
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

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          Details
        </Typography>
      </Stack>

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
        >
          <Box
            component="img"
            src={avatarUrl}
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />
        </Stack>
      </Box>
      <Grid item xs={12} md={6} lg={8}>
        <Card>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <Typography variant="subtitle1" gutterBottom>
              Name: {name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Role: {role}
            </Typography>{' '}
            <Typography variant="subtitle1" gutterBottom>
              Status: {status}
            </Typography>{' '}
            <Typography variant="subtitle1" gutterBottom>
              Company: {company}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

export default Details;
