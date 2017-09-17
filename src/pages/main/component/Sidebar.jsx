import React from 'react'
import style from './stylesheet.css'

class Component extends React.Component {
  render () {
    return (
      <div>
        <div className={style.sideBar}>
          <a href="#" className={style.title}>NCP Code</a>
          <div className={style.links + ' row'}>
            <a href="#team">team</a>
            <a href="#topics">topics</a>
            <a href="#schedule">schedule</a>
            <a href="#summary">summary</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Component
