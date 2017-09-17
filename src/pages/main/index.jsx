import React from 'react'

import Sidebar from './component/Sidebar.jsx'
import Main from './component/Main.jsx'

class Component extends React.Component {
  render () {
    return (
      <div>
        <Sidebar />
        <Main />
      </div>
    )
  }
}

export default Component
