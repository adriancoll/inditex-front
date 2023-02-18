import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className='group'>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className='h-full w-full object-cover object-center group-hover:opacity-75'
        />
      </div>
      <h3
        aria-label='product-brand-and-model'
        className='mt-4 text-sm text-gray-200'
      >
        {product.brand} | {product.model}
      </h3>
      <p className='mt-1 text-lg font-medium text-indigo-400'>
        {product.price} €
      </p>
    </Link>
  )
}
