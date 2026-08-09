import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Destination from './components/Destination/Destination.jsx'
import Flights from './components/Flights/Flights.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'
import WishlistProvider  from './Contexts/WishlistProvider.jsx'
import ThemeProvider from './Contexts/ThemeProvider.jsx'
import { flightInfoLoader } from './hooks/useFlightInfo.jsx'
import BookingPage from './components/BookingDetails/BookingPage.jsx'
import AboutPage from './components/About/About.jsx'





const router = createBrowserRouter(
  
createRoutesFromElements(


    <Route path='/' element= {<Layout/>} >
        <Route loader = {flightInfoLoader} path='' element={<Home/>} /> {/*so its mandatory to add loader = {flightInfoLoader} in wihchever loader you are using otherwise it would throw error  */}
       <Route path='Destinations' element={<Destination/>} />
       <Route loader = {flightInfoLoader} path='flights-tracker' element={<Flights/>} /> 
       <Route path='wishlist' element={<Wishlist/>} /> 
       <Route path='book-now/:userId' element={<BookingPage/>} />
       <Route path='about' element={<AboutPage/>} />
       
      
    </Route>


));


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ThemeProvider>
    <WishlistProvider>
    <RouterProvider router={router} />
   </WishlistProvider>
    </ThemeProvider>
  </StrictMode>
 

)
