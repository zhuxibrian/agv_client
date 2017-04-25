import React, { PropTypes } from 'react'
import { connect } from 'dva'

const App = ({ children, location, dispatch, app }) => {
  return (
    <div>{children}</div>
  )
}

export default App
