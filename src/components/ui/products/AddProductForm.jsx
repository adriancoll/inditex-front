import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddProductSchema } from '../../../schemas/add-product.schema'
import { CustomSelect } from '../CustomSelect'
import { useCart } from '../../../hooks'
import { classNames } from '../../../utils'
import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'

export const AddProductForm = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      id: product._id,
      // Si hay solo una la seleccionamos
      colorCode: product.colors.length === 1 ? 0 : null,
      storageCode: product.storage.length === 1 ? 0 : null
    },
    mode: 'onSubmit',
    resolver: yupResolver(AddProductSchema)
  })

  const { addToCart } = useCart()

  const addToCartCallback = () => {
    setAddedToCart(true)

    setTimeout(() => {
      setAddedToCart(false)
      reset()
    }, 3500)
  }

  const onSubmit = (data) => {
    addToCart({ ...data }, addToCartCallback)
  }

  return (
    <FormProvider {...{ register, errors }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-7'>
          <CustomSelect
            id='colors'
            label='Selecciona un color'
            name='colorCode'
            placeholder='Selecciona el color'
          >
            {product.colors.map((color, index) => (
              <option key={color} value={index}>
                {color}
              </option>
            ))}
          </CustomSelect>

          <CustomSelect
            id='storages'
            label='Selecciona una capacidad'
            name='storageCode'
            placeholder='Selecciona la capacidad'
          >
            {product.storage.map((color, index) => (
              <option key={color} value={index}>
                {color} GB
              </option>
            ))}
          </CustomSelect>

          <button
            disabled={!isValid}
            type='submit'
            className={classNames(
              addedToCart &&
                'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
              'disabled:cursor-not-allowed duration-300 disabled:opacity-50 transition text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            )}
          >
            {addedToCart ? (
              <CheckIcon
                aria-label='added-to-cart'
                aria-hidden='true'
                className='w-5 h-5 mr-2 -ml-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              />
            ) : (
              <PlusIcon
                aria-label='add-to-cart'
                aria-hidden='true'
                className='w-5 h-5 mr-2 -ml-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              />
            )}

            {addedToCart
              ? 'Añadido al carrito correctamente'
              : 'Añadir al carrito'}
          </button>
        </div>

        {/*  <pre>{isValid && JSON.stringify({ ...watch() })}</pre> */}
      </form>
    </FormProvider>
  )
}
