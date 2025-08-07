import React, { createContext, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { zhCN } from '@mui/material/locale';

const ThemeContext = createContext<{ theme: any }>({ theme: undefined });

export const useAppTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useAppTheme must be inside ThemeProviderWrapper');
  return ctx;
};

const getMuiTheme = () =>
  createTheme(
    {
      palette: {
        primary: {
          main: '#e20000',
        },
        secondary: {
          main: '#8E44AD',
        },
        background: {
          default: '#1a1a1a',
          paper: '#2d4961',
        },
        text: {
          primary: '#ffffff',
        },
      },
    },
    zhCN
  );

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const muiTheme = getMuiTheme();

  return (
    <ThemeContext.Provider value={{ theme: muiTheme }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

{
  /**
  const darkPalette = {
  '--color-bg': '#213547',
  '--color-text': '#ffffff',
  '--color-card': '#2d4961',
  '--color-border': '#3e6384',
  '--color-primary': '#e20000',
  '--color-secondary': '#8E44AD',
  '--color-reset': '#c0392b',
  '--color-reset-hover': '#e74c3c',
};
   */
}