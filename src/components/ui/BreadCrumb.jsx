import { useBreadcrumbs } from '../../hooks/useBreadcrumbs'

export const BreadCrumb = () => {
  const { crumbs } = useBreadcrumbs()

  return <div className='breadcrumbs'>{crumbs}</div>
}
