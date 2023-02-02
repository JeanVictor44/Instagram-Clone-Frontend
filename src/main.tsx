import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CustomThemeProvider } from './context/Theme';
import { router } from './routes';
import { GlobalStyles } from './styles/GlobalStyles';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Disponibiliza os temas da aplicação e a função para trocar o tema */}
    {/* Consumir com o useTheme */}
    <CustomThemeProvider>
      <GlobalStyles />
      <RouterProvider router={router}/>
    </CustomThemeProvider>
  </React.StrictMode>,
);
