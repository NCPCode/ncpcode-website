import React from 'react'
import style from './stylesheet.css'

class Component extends React.Component {
  render () {
    return (
      <div className={style.main}>
        <h1 id="summary">summary</h1>
        <div className="row captions">
          <div className="el-3">
            <img src="media/question.svg" style={{width:'40%'}} />
            <p>you know nothing about computers</p>
          </div>
          <img src="media/arrow.svg" style={{width:'20%'}} />
          <div className="el-3">
            <img src="media/programmer.svg" style={{width:'40%'}} />
            <p>you can make websites and cool games</p>
          </div>
        </div>
        <h1 id="philosophies">our core philosophies</h1>
        <div className="row captions">
          <div className="el-3">
            <img src="media/snakes.svg" style={{width:'40%'}} />
            <p><b>simple</b></p>
            <p>we use the simplest tools to insure that you understand the topic</p>
          </div>
          <div className="el-3">
            <img src="media/clock.svg" style={{width:'40%'}} />
            <p><b>quick</b></p>
            <p>we focus on efficiency, making learning new concepts a breeze</p>
          </div>
          <div className="el-3">
            <img src="media/fist.svg" style={{width:'40%'}} />
            <p><b>fun</b></p>
            <p>we teach languages that you actually have fun with!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Component
