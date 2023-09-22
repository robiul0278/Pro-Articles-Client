import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './FirebaseAuth/Provider/AuthProvider';
import router from './Routes/Routes';
import { ThemProvider } from './Routes/ThemProvider';
import { Provider } from 'react-redux';
import { store } from './Redux/store/store';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemProvider>
          <RouterProvider router={router} />
        </ThemProvider>
      </QueryClientProvider>
    </AuthProvider>
    </Provider>
  </React.StrictMode>
)
