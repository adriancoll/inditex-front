import { useState } from 'react'
import { ProductCard } from './ProductCard'
import { useProducts } from '../../../hooks/useProducts'
import { ProductSearchBar } from './ProductSearchBar'
import { useDebounce } from '../../../hooks'
import { Transition } from '@headlessui/react'
import { FolderMinusIcon, FunnelIcon } from '@heroicons/react/24/outline'

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
      <ProductSearchBar
        disabled={products.length === 0}
        query={query}
        setQuery={setQuery}
      />

      <div>
        <h2 className='sr-only'>Dispositivos móviles</h2>

        <Transition
          show={filteredProducts.length > 0}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </Transition>

        <Transition
          show={filteredProducts.length === 0 && query !== ''}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='grid place-items-center w-full py-52 '>
            <FunnelIcon className='h-16 w-16' />
            <div className='my-7 text-center'>
              <p className='font-bold text-xl'>
                No se han encontrado productos
              </p>
              <p className='text-gray-400'>
                No hay ningún dispositvo que encaje con tu búsqueda "
                <strong>{query}</strong>"
              </p>
            </div>
            <button className='bg-indigo-600 text-white font-bold w-fit px-6 py-2 rounded-lg'>
              Limpiar búsqueda
            </button>
          </div>
        </Transition>

        <Transition
          show={filteredProducts.length === 0 && query === ''}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='grid place-items-center w-full py-52 text-xl'>
            <FolderMinusIcon className='h-16 w-16' />
            <div className='my-7 text-center'>
              <p className='font-bold'>No se han encontrado productos</p>
              <p className='text-gray-400'>Puede que haya un error!</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}
