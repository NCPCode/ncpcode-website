import React from 'react'
import style from './stylesheet.css'

class Component extends React.Component {
  render () {
    return (
      <div>
        <div className={style.sideBar}>
          <div className={style.title}>NCP Code</div>
        </div>
        <div className={style.links}>
          <a href="#time">time</a>
          <a href="#time">time</a>
          <a href="#time">time</a>
        </div>
      </div>
    )
  }
}

export default Component
