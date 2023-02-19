import React from 'react'
import { ProductList } from '../components/ui'
import { useProducts } from '../hooks'

export const ProductsPage = () => {
  const { products, loading } = useProducts()

  return (
    <div>
      <ProductList products={products} loading={loading} />
    </div>
  )
}
