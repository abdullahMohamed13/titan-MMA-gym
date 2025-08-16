import { SignInButton , useAuth, UserButton } from '@clerk/clerk-react';
import StyledButton from "./StyledButton";
import { Login } from "@mui/icons-material"; 

export default function SignInHeader({ iconSize }: { iconSize: 'small' | 'large' }) {
  const { isLoaded, isSignedIn } = useAuth();

  // Wait until Clerk is fully loaded before rendering anything
  if (!isLoaded) {
    return null
  }

  return <header>
      {isSignedIn ? (
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                marginTop: '3px',
                width: iconSize === 'large' ? '44px' : '35px',
                height: iconSize === 'large' ? '44px' : '35px',
              },
            },
          }}
        />
      ) : (
        <SignInButton
          mode="modal"
          appearance={{
            elements: {
              card: {
                border: '3px solid #b50202',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              },
              socialButtonsGoogle: { color: '#fff' },
              socialButtonsFacebook: { color: '#fff' },
              socialButtons: { color: '#ffffff' },
              socialButtonsIcon: { filter: 'invert(1)' },
            },
            variables: {
              colorPrimaryForeground: '#ffffff',
              colorBackground: '#b50202',
              colorBorder: '#ffffff',
              colorText: '#ffffff',
              colorPrimary: '#b50202',
            },
          }}
        >
          <StyledButton
            sx={{
              padding: { xs: '7px 15px', md: '13px 20px' },
            }}
            text="Sign In"
            icon={<Login />}
            fontSize="16px"
            borderRad={2}
          />
        </SignInButton>
      )}
    </header>
}
