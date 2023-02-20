import { Header, Debugger } from '../ui'

export const MainLayout = ({ children, hasHeader = true }) => {
  return (
    <>
      <div className='w-full pt-16'>
        {hasHeader ? <Header /> : null}
        {children}
        {process.env.NODE_ENV === 'development' ? <Debugger /> : null}
      </div>
    </>
  )
}
