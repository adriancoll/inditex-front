import { Header, Debugger } from '../ui'

export const MainLayout = ({ children }) => {
  return (
    <div className='w-full pt-16'>
      <Header />
      {children}
      {process.env.NODE_ENV === 'development' ? <Debugger /> : null}
    </div>
  )
}
