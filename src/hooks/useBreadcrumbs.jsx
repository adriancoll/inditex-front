import { Link, useLocation } from 'react-router-dom'

export const useBreadcrumbs = () => {
  const location = useLocation()
  let currentLink = ''

  const crumbs = ['/']
    .concat(location.pathname.split('/').filter((crumb) => crumb !== ''))
    .map((crumb) => {
      let crumbLabel = crumb === '/' ? 'Home' : crumb

      if (crumbLabel.includes('-')) {
        crumbLabel = crumbLabel.split('-').join(' ')
      }

      if (crumb !== '/') {
        currentLink += `/${crumb}`
      }

      return (
        <div key={crumb} className='crumb'>
          <Link to={currentLink}>{crumbLabel}</Link>
        </div>
      )
    })

  return { crumbs }
}
