import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Container } from './style';

export function Default() {
  return (
    <Container>
      <Sidebar />
      <Outlet />    
    </Container>
  );
}