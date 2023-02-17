import { createBrowserRouter } from 'react-router-dom'

import { Root } from '../routes/Root'
import ErrorPage from '../error-page'
import ProductDetail, { loader as productLoader } from '../routes/ProductDetail'
import { ProductList } from '../components/ui/products/ProductList'

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ProductList />
      },
      {
        path: '/products',
        element: <ProductList />
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
