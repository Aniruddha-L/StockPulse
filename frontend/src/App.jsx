import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home'

function App(){
    const Routes = createBrowserRouter([
        {
            path:'/',
           element:<Home /> 
        }
    ])
  return (
    <RouterProvider router={Routes} />
  )
}

export default App