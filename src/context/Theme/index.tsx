import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes/light';
import { Theme } from '../../types/Theme';

interface ThemeContextData {
    toggleTheme(): void;
    theme: Theme
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

interface CustomThemeProviderProps {
    children: ReactNode
}

export function CustomThemeProvider({children}: CustomThemeProviderProps){
  const [theme, setTheme] = useState<Theme>(light);
  function toggleTheme(){
      
  }
  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }} >
      <ThemeProvider theme={theme}>
        {
          children
        }
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(){
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error('useTheme must be used within CustomThemeProvider'); 
  }
  return context;
}