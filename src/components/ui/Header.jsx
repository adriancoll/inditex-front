import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Cart } from '../Cart'
import { BreadCrumb } from './BreadCrumb'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()

  return (
    <Disclosure
      as='nav'
      aria-label='header'
      className='bg-gray-800/90 fixed top-0 left-0 right-0 backdrop-blur-md z-50'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {location.pathname !== '/' && (
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Abrir menú</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                )}
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <Link
                  to='/'
                  role='link'
                  aria-label='logo-icon'
                  className='flex flex-shrink-0 items-center gap-2'
                >
                  <span className='blockrotate-1 animate-pulse'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                      />
                    </svg>
                  </span>
                  <span className='font-extrabold'>DeviApp</span>
                </Link>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    <BreadCrumb />
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <Cart />
              </div>
            </div>
          </div>

          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            {location.pathname !== '/' && (
              <Disclosure.Panel className='sm:hidden'>
                <div className='space-y-1 px-2 pt-2 pb-3'>
                  <BreadCrumb />
                </div>
              </Disclosure.Panel>
            )}
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Header
