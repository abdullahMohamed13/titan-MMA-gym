import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './styles/index.css'

// Components
import Navbar from './components/NavBar'
import PageSkeleton from './components/PageSkeleton'
import ProductsLayout from './layouts/ProductsLayout'
// Pages
import Home from './pages/home/Home'
import { ErrorMessage } from './pages/error-pages/ErrorMessage'
import { NotFoundPage } from './pages/error-pages/NotFoundPage'
import Footer from './components/Footer'
import CoachProfile from './pages/coaches/dynamic/CoachProfile'
  // Lazily loaded
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'))
const Classes = lazy(() => import('./pages/classes/Classes'))
const Coaches = lazy(() => import('./pages/coaches/Coaches'))
const Events = lazy(() => import('./pages/events/Events'))
const Students = lazy(() => import('./pages/students/Students'))

const mainPages = [
  {label: 'home', url: '/'},
  {label: 'classes', url: '/classes'},
  {label: 'coaches', url: '/coaches'},
  {label: 'students', url: '/students'},
  {label: 'products', url: '/products'},
  {label: 'events', url: '/events'}
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
            <Classes />
          </Suspense>
        ),
      },
      {
        path: '/classes/:classId',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Classes />
          </Suspense>
        ),
      },
      {
        path: '/coaches',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Coaches />
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
        path: '/events',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Events />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/products',
    element: <ProductsLayout />,
    children: [
      {
      index: true, 
      element: (
        <Suspense fallback={<PageSkeleton />}>
            <ProductsPage />
        </Suspense>
        )
    }
    ],
  },
])

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}
