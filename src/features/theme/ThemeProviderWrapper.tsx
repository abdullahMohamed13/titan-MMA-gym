import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { zhCN } from '@mui/material/locale';
import { applyTheme, initTheme, ThemeName } from './manager';

type ThemeContextType = {
  mode: ThemeName;
  toggle: () => void;
  set: (mode: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useAppTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useAppTheme must be inside ThemeProviderWrapper');
  return ctx;
};

const getMuiTheme = (mode: ThemeName) =>
  createTheme(
    {
      palette: {
        mode,
        primary: {
          main: mode === 'dark' ? '#e20000' : '#2ecc71',
        },
        secondary: {
          main: mode === 'dark' ? '#8E44AD' : '#9b59b6',
        },
        background: {
          default: mode === 'dark' ? '#213547' : '#f5f7fa',
          paper: mode === 'dark' ? '#2d4961' : '#ffffff',
        },
        text: {
          primary: mode === 'dark' ? '#ffffff' : '#2C3E50',
        },
      },
    },
    zhCN
  );

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeName>('light');

  useEffect(() => {
    const initial = initTheme();
    setMode(initial);
  }, []);

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));
  const set = (m: ThemeName) => setMode(m);

  const muiTheme = getMuiTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, toggle, set }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
