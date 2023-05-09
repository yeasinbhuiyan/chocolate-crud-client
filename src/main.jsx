import React from 'react'
import ReactDOM from 'react-dom/client'
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
    path: '/updateChocolate/:id',
    element: <UpdateChocolate></UpdateChocolate>,
    loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>


  </React.StrictMode>,
)
