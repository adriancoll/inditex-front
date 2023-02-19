import { createBrowserRouter } from 'react-router-dom'

import { Root } from '../routes/Root'
import ProductDetail, { loader as productLoader } from '../routes/ProductDetail'
import { ProductsPage } from '../routes/ProductsPage'
import ErrorPage from '../error-page'

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ProductsPage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/products/:slug',
        loader: productLoader,
        element: <ProductDetail />
      }
    ]
  }
]

/**
 * Here we build our routes and export it to `../main.jsx`
 */
export const router = createBrowserRouter(routes)
