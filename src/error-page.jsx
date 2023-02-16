import React from 'react'
import { MainLayout } from './components/layouts/MainLayout'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <MainLayout>
      <main className='grid min-h-full w-full place-items-center py-24 px-6 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-indigo-300'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl'>
            Página no encontrada
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-300'>
            Parece que te has perdido...
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to='/'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default ErrorPage
