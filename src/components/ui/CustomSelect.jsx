import React from 'react'
import { useFormContext } from 'react-hook-form'

export const CustomSelect = ({
  children,
  name = '',
  label = '',
  id,
  placeholder = ''
}) => {
  const { register, errors } = useFormContext()
  return (
    <div>
      <label
        htmlFor={id}
        className=' mb-2 flex gap-x-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <select
        id={id}
        placeholder={placeholder}
        className='capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        {...register(name)}
      >
        {children}
      </select>
      {!!errors && errors[name]}
    </div>
  )
}
