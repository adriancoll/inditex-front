import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Transition } from '@headlessui/react'
import { useCart } from '../hooks'

export const Cart = () => {
  const { count } = useCart()

  return (
    <div className='relative'>
      <button
        type='button'
        className=' p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
      >
        <span className='sr-only'>Ver Carrito</span>
        <ShoppingCartIcon className='h-6 w-6' aria-hidden='true' />
      </button>
      <Transition
        show={count > 0}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <span className='absolute -bottom-2 -right-2 text-xs inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2'>
          {count}
        </span>
      </Transition>
    </div>
  )
}
