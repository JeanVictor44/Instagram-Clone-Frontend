import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, 
  {
    path: '/login',
    element: <Navigate to="/"/>
  },
  {
    path: '/register',
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