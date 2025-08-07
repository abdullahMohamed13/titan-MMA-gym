import { ReactNode } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface PagesProps {
  label: string | ReactNode
  url: string
}

interface NavBarProps {
  pages: PagesProps[]
}
export default function NavBar({pages}: NavBarProps) {
  const navigate = useNavigate()
  return (
    <>
      {/* Top bar */}
      <nav className="bg-primary border-border border-b">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              loading="lazy"
              src="images/just-brand-logo.webp"
              width={80}
              height={80}
              alt="Gym Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-text">
              Titan-MMA Gym
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm text-primary"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="text-sm text-primary bg-[#e20000] hover:bg-[#e20000]/60 p-3 rounded-xl"
            >
              Log In
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom menu */}
      <nav className="bg-[#e20000]">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {pages.map((page, index) => (
                <li key={index}>
                  <a onClick={() => page.url === '/products' ? window.open(page.url, '_blank') : navigate(page.url)}
                    className="text-white hover:underline cursor-pointer"
                    aria-current="page">
                    {typeof(page.label) === 'string' ? page.label.toUpperCase() : page.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
