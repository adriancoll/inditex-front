import * as ReactDOM from 'react-dom'

const headRoot = document.head

export const Head = ({ children }) =>
  ReactDOM.createPortal(children, headRoot)
