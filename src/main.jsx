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


const router = createBrowserRouter(
  
createRoutesFromElements(


    <Route path='/' element= {<Layout/>} >
       <Route path='' element={<Home/>} />
       <Route path='Destinations' element={<Destination/>} />
       <Route path='flights-tracker' element={<Flights/>} /> 
       <Route path='wishlist' element={<Wishlist/>} /> 
      
    </Route>


));


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <WishlistProvider>
    <RouterProvider router={router} />
   </WishlistProvider>
  </StrictMode>
 

)
