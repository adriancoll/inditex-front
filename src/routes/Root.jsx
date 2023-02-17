import { Outlet } from 'react-router-dom'
import { MainLayout } from '../components/layouts/MainLayout'
import { productService } from '../services'

/**
 * Carga con React Router Dom
 * @see `../navigation/router.jsx`
 * @returns {Product[]} productos
 */
export const loader = async () => {
  const { results } = await productService.getAll()
  return results
}

export const Root = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export default Root
