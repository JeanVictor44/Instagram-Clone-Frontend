
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import { Loader } from '../components/Loader';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path:'/',
        element: <Login />
      },
      {
        path:'/login',
        element: <Navigate to='/'/>
      },
      {
        path:'register',
        element: <Register />
      },
    ]
  }, 
  
  {
    path: '/home',
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

]);