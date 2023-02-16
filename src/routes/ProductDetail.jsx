import { useCallback, useState } from 'react'

import {
  CheckBadgeIcon,
  CircleStackIcon,
  SparklesIcon
} from '@heroicons/react/20/solid'

import { useCart } from '../hooks'
import { classNames } from '../utils/classNames'

import { ProductOptionsSelect } from '../components/ui/products'
import { useLoaderData } from 'react-router-dom'
import { productService } from '../services'


export const loader = async ({ params }) => {
  const { productId } = params
  const { results } = await productService.getProductDetail(productId)
  const { product } = results

  return { product }
}

const getTheFirstIfOnlyOption = (option) =>
  option.length === 1 ? 0 : ''

export const ProductDetail = () => {
  const { product } = useLoaderData()

  const [storageSelected, setStorageSelected] = useState(
    getTheFirstIfOnlyOption(product.storage)
  )
  const [colorSelected, setColorSelected] = useState(
    getTheFirstIfOnlyOption(product.colors)
  )

  const [addedToCartSuccessfully, setAddedToCartSuccessfully] = useState(false)

  const canAddToCart = colorSelected >= 0 && storageSelected >= 0

  const { addToCart } = useCart()

  const getErrorLabel = useCallback(() => {
    // si no tengo almacenamiento ni color
    if (storageSelected === undefined && colorSelected === undefined)
      return 'Debes seleccionar un color y capacidad!'

    return `Debes seleccionar ${
      storageSelected === undefined ? 'capacidad!' : 'un color'
    }`
  })

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-4'>
      <div className='flex lg:flex-row flex-col lg:gap-3'>
        {/* Image container */}
        <div className='max-w-2xl sm:px-6 lg:grid lg:max-w-7xl rounded-lg overflow-hidden '>
          <img
            src={product.image}
            alt={`${product.brand} ${product.model}`}
            className='h-full w-full object-cover object-center'
          />
        </div>

        {/* Product info */}
        <div className='flex-1 px-4 pt-10 lg:pt-3 pb-16 sm:px-6 '>
          <div>
            <h1 className='text-2xl font-bold tracking-tight text-gray-200 sm:text-3xl'>
              {product.brand} | {product.model}
            </h1>
          </div>

          {/* Actions!!! */}
          <div className='mt-4 lg:row-span-2 lg:mt-0'>
            <h2 className='sr-only'>Información del producto</h2>
            <p className='text-3xl tracking-tight text-gray-200'>
              {product.price} €
            </p>

            <div className='mt-10'>
              {/* Sizes */}
              <div className='mt-10'>
                <div className='flex items-center justify-start gap-1'>
                  <SparklesIcon className='h-4 w-4' /> Colores
                  <h3 className='text-sm font-medium text-gray-200'></h3>
                </div>

                {/* selector de almacenamiento */}
                <ProductOptionsSelect
                  selected={colorSelected}
                  onChange={setColorSelected}
                  options={product.colors}
                />
              </div>

              {/* Sizes */}
              <div className='mt-10'>
                <div className='flex items-center justify-start gap-1'>
                  <CircleStackIcon className='h-4 w-4' /> Almacenamiento
                  <h3 className='text-sm font-medium text-gray-200'></h3>
                </div>
                {/* selector de almacenamiento */}
                <ProductOptionsSelect
                  selected={storageSelected}
                  sufix='GB'
                  onChange={setStorageSelected}
                  options={product.storage}
                />
              </div>

              <button
                disabled={!canAddToCart}
                onClick={() =>
                  addToCart(
                    product._id,
                    colorSelected,
                    storageSelected,
                    setAddedToCartSuccessfully
                  )
                }
                type='submit'
                className={classNames(
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  'max-w mt-10 flex gap-2 transition z-0 w-full items-center justify-center rounded-md border border-transparent duration-200 py-3 px-8 text-base font-medium text-white  focus:outline-none focus:ring-2  focus:ring-offset-2',
                  addedToCartSuccessfully
                    ? 'bg-green-500 hover:bg-green-700 pointer-events-none focus:ring-green-500 opacity-75 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                )}
              >
                {canAddToCart
                  ? addedToCartSuccessfully
                    ? 'Añadido al carrito correctamente'
                    : 'Añadir al carrito'
                  : getErrorLabel()}
                {addedToCartSuccessfully ? (
                  <CheckBadgeIcon className='h-5 w-5' />
                ) : null}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
