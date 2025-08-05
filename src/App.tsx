import { useEffect, useRef, Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import './styles/index.css'

// Components
import Navbar from './components/AppBar'
import PageSkeleton from './components/PageSkeleton'
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

// function ScrollProvider({ children }: { children: React.ReactNode }) {
//   const lenisRef = useRef<Lenis | null>(null)

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     })
//     lenisRef.current = lenis;
    
//     // Store the global instance for coordination with other components
//     (window as any).__lenis = lenis

//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }
//     requestAnimationFrame(raf)

//     return () => {
//       lenis.destroy()
//       delete (window as any).__lenis
//     }
//   }, [])

//   return <div>{children}</div>
// }

/** Wraps children and sets up Lenis smooth scrolling */
const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
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
        path: '/products',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <ProductsPage />
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
])

export default function App() {
  return (
    // <ScrollProvider>
        <RouterProvider router={router} />
    // </ScrollProvider>
  )
}

{
  /*
  <div className="text-text italic">
    <span className="text-text italic">Have Any Questions? Contact Us: </span>
    <a href="tel:01010434465" className="text-sm hover:underline text-primary">
      +201010434465
    </a>
  </div>
   */
}

{
  /**
   (teal) – modern and energetic

   (bright cyan) – high contrast and sporty

   (dark teal) – balanced and strong

   (aqua) – bold and eye-catching
   */
}