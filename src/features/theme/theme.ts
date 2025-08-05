import { createTheme } from '@mui/material/styles';
import { zhCN } from '@mui/material/locale';

const theme: object = createTheme({
  colorSchemes: {
    dark: true
  },
  palette: {
    primary: {
      main: '#e20000',
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      default: '#000',
    },
  },
},
zhCN
);
export default theme
