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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
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
