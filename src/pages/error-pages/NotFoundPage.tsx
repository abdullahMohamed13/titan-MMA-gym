import { Box, Button, Container } from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent";

export default function NotFoundPage() {
  return (
    <Container className="min-h-screen flex items-center justify-center bg-background text-text p-6">
      <Box className="text-center max-w-md">
        <img
          src="/images/just-brand-logo.webp"
          className="rounded-2xl mb-3 mx-auto"
          width={170}height={170}
          alt="Website logo brand" />
          <HeaderComponent
            headingText="404 - Page Not Found"
            subHeadingText="Hmm, the page you were looking for doesn't seem to exist anymore. LMAO 🤣"
            />
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            px: 4, 
            py: 2,
            fontSize: '1.1rem',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #e20000, #ff6b35)',
            '&:hover': {
              background: 'linear-gradient(45deg, #c10000, #e55a2b)',
              transform: 'scale(1.05)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <a href='/'>GO HOME</a>
        </Button>
      </Box>
    </Container>
  );
}
