import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './store'
import AuthLayout from './layouts/AuthLayout'
import Auth from './pages/Auth'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Emailer from './pages/Emailer'
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children:[
      {
        path: '/',
        element: <Auth />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <MainLayout />,
    children:[
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'auto-emailer',
        element: <Emailer />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
