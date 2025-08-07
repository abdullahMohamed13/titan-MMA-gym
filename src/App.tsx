import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './styles/index.css'

// Components
import Navbar from './components/NavBar'
import PageSkeleton from './components/PageSkeleton'
import ProductsLayout from './layouts/ProductsLayout'
import Footer from './components/Footer'
// Pages
import Home from './pages/home/Home'
  // Lazily loaded
const Classes = lazy(() => import('./pages/classes/Classes'))
const Coaches = lazy(() => import('./pages/coaches/Coaches'))
const CoachProfile = lazy(() => import('./pages/coaches/dynamic/CoachProfile'))
const Students = lazy(() => import('./pages/students/Students'))
const Events = lazy(() => import('./pages/events/Events'))
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'))
const CategoryPage = lazy(() => import('./pages/products/CategoryPage'))
const ErrorMessage = lazy(() => import('./pages/error-pages/ErrorMessage'))
const NotFoundPage = lazy(() => import('./pages/error-pages/NotFoundPage'))

const mainPages = [
  {label: 'home', url: '/'},
  {label: 'classes', url: '/classes'},
  {label: 'coaches', url: '/coaches'},
  {label: 'students', url: '/students'},
  {label: 'store', url: '/products'},
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
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
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
    },
    {
      path: '/products/:cat',
      element: <Suspense fallback={<PageSkeleton />}>
          <CategoryPage />
        </Suspense>
    }
    ],
  },
])

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}
