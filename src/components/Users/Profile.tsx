import React from 'react';
import USER from '../../__mock__/user';

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

const { id, name, role, status, company, avatarUrl, isVerified } = USER;

const Profile = () => {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          Profile
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

export default Profile;
