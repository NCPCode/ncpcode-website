import React from 'react'
import style from './stylesheet.css'

class Component extends React.Component {
  render () {
    return (
      <div>
        <div className={style.sideBar}>
          <div className={style.title}>NCP Code</div>
          <div className={style.links}>
            <a href="#philosophies">focus</a>
            <a href="#summary">summary</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Component
