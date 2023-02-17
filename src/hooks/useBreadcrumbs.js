// import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useBreadcrumbs = () => {
  const location = useLocation()

  console.log({ location })
  //   useEffect(() => {
  //     console.log(location.split('/'))
  //   }, [location])
  //   return { location }
}
