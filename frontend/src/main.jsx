import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Service from './pages/Service';
import PricingL from './pages/PricingL.jsx';
import PricingDM from './pages/PricingDM.jsx';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login.jsx';
import Legalitas from './pages/Legalitas.jsx';
import DigitalMarketing from './pages/DigitalMarketing.jsx'

const router = createBrowserRouter([
  { path:"/", element: <Home/>},
  { path:"/service", element: <Service/>},
  { path:"/pricing/legalitas", element: <PricingL/>},
  { path:"/pricing/digitalMarketing", element: <PricingDM/>},
  { path:"/aboutUs", element: <AboutUs/>},
  { path:"/contactUs", element: <ContactUs/>},
  { path:"/login", element: <Login/>},
  { path:"/service/legalitas", element: <Legalitas/>},  
  { path:"/service/digitalMarketing", element: <DigitalMarketing/>},  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
