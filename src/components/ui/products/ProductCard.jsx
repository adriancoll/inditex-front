import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
  return (
    <Link to={`products/${product._id}`}  className='group'>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className='h-full w-full object-cover object-center group-hover:opacity-75'
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-200'>{product.brand} | {product.model}</h3>
      <p className='mt-1 text-lg font-medium text-indigo-400'>{product.price} €</p>
    </Link>
  )
}
