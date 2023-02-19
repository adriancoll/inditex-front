import { ProductCardSkeletonList } from './ProductCardSkeletonList'
import { render } from '../../../utils/test-utils'

describe('<ProductCardSkeletonList />', () => {
  let renderInstance

  beforeEach(() => {
    renderInstance = render(<ProductCardSkeletonList />)
  })

  test('it renders', () => {
    expect(renderInstance).toBeTruthy()
  })

  test('It renders 8 skeletons', () => {
    expect(renderInstance.getAllByRole('status')).toHaveLength(8)
  })
})
