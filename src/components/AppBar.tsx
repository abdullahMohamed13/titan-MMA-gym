import { useNavigate, Link } from 'react-router-dom';
import { ThemeToggle } from '../features/theme/ThemeToggle';

const pages = [
  {label: 'home', url: '/'},
  {label: 'classes', url: '/classes'},
  {label: 'coaches', url: '/coaches'},
  {label: 'students', url: '/students'},
  {label: 'products', url: '/products'},
  {label: 'events', url: '/events'},];

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      {/* Top bar */}
      <nav className="bg-primary border-border border-b">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="images/just-brand-logo.png"
              width={80}
              height={80}
              alt="Gym Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-text">
              Titan-MMA Gym
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <ThemeToggle />
            <a
              href="#"
              className="text-sm text-primary"
            >
              Sign Up
            </a>
            <a
              href="#"
// #00b3b3
// #00a6d6
// #008080
// #00ffff
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
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {pages.map((page, index) => (
                <li key={index}>
                  <a onClick={() => navigate(page.url)}
                    className="text-white hover:underline cursor-pointer"
                    target={page.label === 'products' ? '_blank' : '_self'}
                    aria-current="page">
                    {page.label.toUpperCase()}
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
