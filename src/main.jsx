import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolates from './Components/AddChocolates.jsx';
import UpdateChocolate from './Components/UpdateChocolate.jsx';
import AllChocolates from './Components/AllChocolates.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllChocolates></AllChocolates>
  },
  {
    path: '/addChocolates',
    element: <AddChocolates></AddChocolates>
  },
  {
    path: '/updateChocolate',
    element: <UpdateChocolate></UpdateChocolate>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>


  </React.StrictMode>,
)
