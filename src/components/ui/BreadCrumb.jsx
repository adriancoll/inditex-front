import { useBreadcrumbs } from '../../hooks/useBreadcrumbs'

export const BreadCrumb = () => {
  const { crumbs } = useBreadcrumbs()

  return <div role='navigation' aria-label='breadcrumbs' className='breadcrumbs'>{crumbs}</div>
}
