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
import { WeatherProvider } from "./Contexts/WeatherAPIContext";
import { FlightProvider } from './Contexts/FlightContext.jsx'

// Lazy-loaded pages
import Destination from './components/Destination/Destination.jsx'
import WeatherPage from './components/Weather/WeatherPage.jsx'
const Flights = lazy(() => import('./components/Flights/Flights.jsx'))
const Wishlist = lazy(() => import('./components/Wishlist/Wishlist.jsx'))
const BookingPage = lazy(() => import('./components/BookingDetails/BookingPage.jsx'))
const AboutPage = lazy(() => import('./components/About/About.jsx'))

//using a children requires outlet

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Destinations" element={<Destination />} />
      <Route path="flights-tracker" element={<Flights />} /> 
      <Route path = "flights-tracker/weather/:city" element = {<WeatherPage />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="book-now/:userId" element={<BookingPage />} />
      <Route path="about" element={<AboutPage />} />
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
    <ThemeProvider>
      <WeatherProvider>
      <WishlistProvider>
        <FlightProvider>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </FlightProvider>
      </WishlistProvider>
     </WeatherProvider>
    </ThemeProvider>
 
)