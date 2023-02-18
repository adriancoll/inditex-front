import { useDebugger } from '../../hooks/useDebugger'

export const Debugger = () => {
  const { count, products } = useDebugger()

  return (
    <div className='fixed bottom-5 left-5 h-20 right-5'>
      <span className='absolute z-10 -top-4 -left-3 bg-gray-900 text-gray-300/50 px-2 py-1 text-xs rounded-xl shadow-lg'>
        Debugger
      </span>
      <div className='fixed bottom-5 left-5 h-20 right-5 overflow-auto bg-gray-900/50 shadow-lg backdrop-blur-lg rounded-xl px-4 py-2'>
        <pre>
          {JSON.stringify({
            count,
            products
          })}
        </pre>
      </div>
    </div>
  )
}
