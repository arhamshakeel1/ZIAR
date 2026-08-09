// main.jsx
import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'

import WishlistProvider from './Contexts/WishlistProvider.jsx'
import ThemeProvider from './Contexts/ThemeProvider.jsx'

import { FlightProvider } from './Contexts/FlightContext.jsx'

// Lazy-loaded pages
import Destination from './components/Destination/Destination.jsx'
const Flights = lazy(() => import('./components/Flights/Flights.jsx'))
const Wishlist = lazy(() => import('./components/Wishlist/Wishlist.jsx'))
const BookingPage = lazy(() => import('./components/BookingDetails/BookingPage.jsx'))
const AboutPage = lazy(() => import('./components/About/About.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Destinations" element={<Destination />} />
      <Route path="flights-tracker" element={<Flights />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="book-now/:userId" element={<BookingPage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
    <ThemeProvider>
      <WishlistProvider>
        <FlightProvider>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </FlightProvider>
      </WishlistProvider>
    </ThemeProvider>
 
)