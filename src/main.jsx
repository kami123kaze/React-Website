import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home'
import './index.css'
import Layout from './Layout'
import PasswordGenerator from './components/passGen/Password-Generator'


const router = createBrowserRouter([
  {
   path: '/',
   element: <Layout/>,
   children:[
    {
      path:"",
      element: <Home/> 
    },
    {
     path: "/Password-Generator",
     element: <PasswordGenerator/>
    }
   ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
