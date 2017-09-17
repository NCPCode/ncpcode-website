import React from 'react'

import Sidebar from './component/Sidebar.jsx'
import Main from './component/Main.jsx'
import Footer from './component/Footer.jsx'

class Component extends React.Component {
  render () {
    return (
      <div>
        <Sidebar />
        <Main />
        <br /><br /><br /><br /><br /><br />
        <Footer />
      </div>
    )
  }
}

export default Component
