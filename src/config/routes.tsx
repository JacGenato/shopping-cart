import React from 'react';
import { useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import Home from '../pages/Home';
import Profile from '../components/Users/Profile';
import UserList from '../components/Users/UserList';
import Register from '../components/Users/Register';
import Edit from '../components/Users/Edit';
import Details from '../components/Users/Details';

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
        { path: 'register', element: <Register /> },
        { path: 'edit', element: <Edit /> },
        { path: 'details', element: <Details /> },
      ],
    },
  ]);
};

export default Router;
