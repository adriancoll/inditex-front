import React from 'react'
import { ProductList } from '../components/ui'
import { useProducts } from '../hooks'
import { CreateHead } from '../components/ui/head'

export const ProductsPage = () => {
  const { products, loading } = useProducts()

  return (
    <div>
      <CreateHead title='DeviApp - Products' />
      <ProductList products={products} loading={loading} />
    </div>
  )
}
