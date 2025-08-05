import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProviderWrapper } from './features/theme/ThemeProviderWrapper';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProviderWrapper>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProviderWrapper>
);
