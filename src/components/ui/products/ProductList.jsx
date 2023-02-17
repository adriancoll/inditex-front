import { useState } from 'react'
import { ProductCard } from './ProductCard'
import { useProducts } from '../../../hooks/useProducts'
import { ProductSearchBar } from './ProductSearchBar'
import { useDebounce } from '../../../hooks'

export const ProductList = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)

  const { products } = useProducts()

  const filteredProducts =
    debouncedQuery === ''
      ? products
      : products.filter((product) =>
          `${product.brand}${product.model}`
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(debouncedQuery.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <div className='mx-auto max-w-2xl py-6 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-8'>
      <ProductSearchBar query={query} setQuery={setQuery} />

      <div>
        <h2 className='sr-only'>Dispositivos móviles</h2>

        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}

          {filteredProducts.length === 0 && query !== '' ? (
            <div className='flex items-center justify-center flex-col text-center gap-4'>
              <p>
                No se han encontrado productos con el nombre/marca{' '}
                <strong>"{query}"</strong>
              </p>
              <button className='bg-indigo-500 text-white font-bold w-fit px-4 py-2 rounded-lg'>
                Limpiar búsqueda
              </button>
            </div>
          ) : null}

          {filteredProducts.length === 0 ? (
            <p>No se han encontrado productos</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
