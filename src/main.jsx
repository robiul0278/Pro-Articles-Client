import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
<div className=''>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</div>,
)
