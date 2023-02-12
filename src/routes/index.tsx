import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Default } from '../layouts/Default';
import { Feed } from '../pages/Feed';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  }, 
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Feed />

      },
      {
        path: '/post'
      },
      {
        path: '/profile/:userId',
      },
      {
        path: '/messages'
      },    
    ]
  }
  
  
  

]);