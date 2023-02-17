import { Fragment, useCallback, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export const ProductOptionsSelect = ({
  options = [],
  onChange,
  selected,
  sufix = ''
}) => {
  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          String(option.name)
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className='lg:w-72 w-full'>
      <Combobox value={selected} onChange={onChange}>
        <div className='relative mt-1'>
          <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm'>
            <Combobox.Input
              className='w-full capitalize bg-white border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
              displayValue={(selectedIndex) =>
                options[selectedIndex]
                  ? `${options[selectedIndex]} ${sufix}`
                  : 'Selecciona una opción'
              }
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute  z-10 mt-1 lg:max-h-60 md:max-h-32 max-h-24 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filteredOptions.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  No hay opciones disponibles!
                </div>
              ) : (
                filteredOptions.map((option, optionIndex) => (
                  <Combobox.Option
                    key={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={optionIndex}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block capitalize truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option} {sufix}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-indigo-600'
                            }`}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
