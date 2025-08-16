import { ReactNode, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import SignInHeader from './SignHeader'

interface PagesProps {
  label: string | ReactNode
  url: string
}

interface NavBarProps {
  pages: PagesProps[]
}
export default function NavBar({ pages }: NavBarProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <Box className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  loading="lazy"
                  src="images/just-brand-logo.webp"
                  width={80}
                  height={80}
                  alt="Gym Logo"
                  className="h-12 w-auto"
                />
                <span className="hidden md:block self-center text-2xl font-bold">
                  Titan MMA Gym
                </span>
              </Link>
            </div>

            {/* Mobile SignIn */}
            <div className="flex sm:hidden justify-center items-center gap-2">
              <SignInHeader iconSize='small' />

              {/* Mobile menu button */}
              <div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <CloseIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Desktop SignIn */}
            <div className="hidden md:flex items-center">
              <SignInHeader iconSize='large' />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pages.map((page, index) => (
                <a
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    // e.stopPropagation(); // Prevent any parent handlers
                    if (page.url === 'branches') {
                      const element = document.getElementById('branches');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      navigate(page.url);
                    }
                    setIsMenuOpen(false);
                    return false;
                  }}
                  className="block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                >
                  {typeof(page.label) === 'string' ? page.label.toUpperCase() : page.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Box>

      {/* Bottom menu - Desktop only */}
      <nav className="hidden sm:flex items-center justify-center bg-[var(--color-primary)] h-12">
        <ul className="flex space-x-8">
          {pages.map((page, index) => (
            <li key={index}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (page.url === 'branches') {
                    const element = document.getElementById('branches');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    navigate(page.url);
                  }
                }}
                className="text-sm font-bold text-white hover:text-white/80 transition-colors duration-200"
              >
                {typeof(page.label) === 'string' ? page.label.toUpperCase() : page.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
