import ReactDOM from 'react-dom/client';
import './styles/index.css';
// Components
import App from './App';
import { ThemeProviderWrapper } from './features/theme/ThemeProviderWrapper';
// MUI
import CssBaseline from '@mui/material/CssBaseline';
// Redux & React Query
import { store } from './store';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider as ReduxProvider } from 'react-redux';
// Clerk
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { dark, neobrutalism  } from '@clerk/themes'
// Convex
import { ConvexReactClient } from 'convex/react'

// Keys
// const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;
// const CONVEX_URL = process.env.VITE_CONVEX_URL;
// Keys - use standard environment variable names for webpack
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || process.env.VITE_CLERK_PUBLISHABLE_KEY;
const CONVEX_URL = process.env.REACT_APP_CONVEX_URL || process.env.VITE_CONVEX_URL;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key - check your .env file and webpack config')
}
if (!CONVEX_URL) {
  throw new Error('Missing Convex URL - check your .env file and webpack config');
}

const convex = new ConvexReactClient(CONVEX_URL);
const client = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <ThemeProviderWrapper>
      <ReduxProvider store={store}>
        <CssBaseline />
        
        <ClerkProvider
          appearance={{
            baseTheme: [dark, neobrutalism],
            // variables: {
            //   colorBackground: '#1e1e1e',
            //   colorText: '#ffffff',
            // }
          }}
          publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <App />
          </ConvexProviderWithClerk>
        </ClerkProvider>

      </ReduxProvider>
    </ThemeProviderWrapper>
  </QueryClientProvider>
);
