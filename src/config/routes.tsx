import React from 'react';
import { useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import UserList from '../pages/UserList';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: 'profile', element: <Profile /> },
        { path: 'users', element: <UserList /> },
      ],
    },
  ]);
};

export default Router;
