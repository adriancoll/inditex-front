import React from 'react'

export const ProductSearchBar = ({ query, setQuery, disabled = false }) => {
  return (
    <div className='flex justify-end'>
      <label
        htmlFor='search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Buscar
      </label>
      <div className='relative w-full lg:w-1/3 '>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <input
          onChange={(ev) => setQuery(ev.target.value)}
          type='search'
          id='search'
          disabled={disabled}
          value={query}
          className='transition disabled:cursor-not-allowed disabled:opacity-50 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Buscar...'
          required
        />
      </div>
    </div>
  )
}
