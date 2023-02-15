import { useEffect } from 'react'
import { Test } from './TEst'
import { getAll } from './services/products'

const testing = async () => {
  const response = await fetch('/api/cart')
  const data = await response.json()

  return data
}

export const App = () => {
  useEffect(() => {
    const data = getAll()
  }, [])

  return (
    <div>
      <Test />
      <h1 className='text-xl text-red-500'>hello world</h1>
    </div>
  )
}

export default App
