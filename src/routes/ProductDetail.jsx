import { useLoaderData } from 'react-router-dom'
import { productService } from '../services'
import { AddProductForm } from '../components/ui/products/AddProductForm'
import { CreateHead } from '../components/ui/head'

export const loader = async ({ params }) => {
  const { slug } = params
  const { results } = await productService.getProductDetail(slug)
  const { product } = results

  return { product }
}

export const ProductDetail = () => {
  const { product } = useLoaderData()

  return (
    <>
      <CreateHead
        title={`DeviApp - ${product.brand} - ${product.model}`}
        image={product.image}
        description={`DeviApp the best ${product.brand} models; ${product.model}`}
      />
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

              <div className='mt-10 px-4 py-2 border border-gray-400/50 rounded-md'>
                <h3 className='font-semibold text-lg border-b border-inherit mb-2 text-gray-200'>
                  Descripción
                </h3>
                <ul className='list-disc list-inside'>
                  {Object.entries({
                    ...{
                      brand: product.brand,
                      model: product.model,
                      price: product.price
                    },
                    ...product.specification
                  }).map(([spec, value]) => (
                    <li key={spec}>
                      <strong className='capitalize'>{spec}</strong>: {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-10'>
                <AddProductForm product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
