import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './styles/index.css'

// Components
import Navbar from './components/NavBar'
import PageSkeleton from './components/PageSkeleton'
import Footer from './components/Footer'
// Pages
import Home from './pages/home/Home'
// Lazily loaded
const Branch = lazy(() => import('./pages/branches/Branch'))
const PricingPage = lazy(() => import('./pages/pricing/PricingPage'))
const ClassesPage = lazy(() => import('./pages/classes/ClassesPage'))
const CoachesPage = lazy(() => import('./pages/coaches/CoachesPage'))
const CoachProfile = lazy(() => import('./pages/coaches/dynamic/CoachProfile'))
const Students = lazy(() => import('./pages/students/Students'))
const ErrorMessage = lazy(() => import('./pages/error-pages/ErrorMessage'))
const NotFoundPage = lazy(() => import('./pages/error-pages/NotFoundPage'))

const mainPages = [
  {label: 'home', url: '/'},
  {label: 'classes', url: '/classes'},
  {label: 'coaches', url: '/coaches'},
  {label: 'students', url: '/students'},
  {label: 'branches', url: 'branches'},
  {label: 'plans', url: '/pricing'},
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar pages={mainPages} />
      <main className="bg-background text-text">
        <Outlet />
        <Footer />
      </main>
    </>,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/classes',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <ClassesPage />
          </Suspense>
        ),
      },
      {
        path: '/classes/:classId',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <ClassesPage />
          </Suspense>
        ),
      },
      {
        path: '/coaches',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <CoachesPage />
          </Suspense>
        ),
      },
      {
        path: '/pricing',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <PricingPage />
          </Suspense>
        ),
      },
      {
        path: '/coaches/:name',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <CoachProfile />
          </Suspense>
        ),
      },
      {
        path: '/students',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Students />
          </Suspense>
        ),
      },
      {
        path: '/branches/:name',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Branch />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}
