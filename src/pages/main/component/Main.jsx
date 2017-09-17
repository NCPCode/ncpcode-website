import React from 'react'
import style from './stylesheet.css'

class Component extends React.Component {
  render () {
    return (
      <div className={style.main}>
        <img src="media/ncplogo.svg" style={{width:'500px', margin: '50px auto'}} className="horizontal-center" />
        <div className="row">
          <a href="https://github.com/NCPCode"><img src="media/github.svg" style={{height:'50px'}} /></a>
          <a href="https://www.facebook.com/groups/1586369904743034/"><img src="media/facebook.svg" style={{height:'50px'}} /></a>
        </div>
        <h1 id="summary">summary</h1>
        <div className={"row centered"}>
          <div className="el-3">
            <img src="media/question1.svg" style={{maxWidth:'300px'}} />
            <p>you know nothing about computers</p>
          </div>
          <img src="media/arrow.svg" style={{maxWidth:'250px'}} />
          <div className="el-3">
            <img src="media/programmer.svg" style={{maxWidth:'300px'}} />
            <p>you can make websites and cool games</p>
          </div>
        </div>

        <h1>coding can be fun!</h1>
        <p>Coding is notorious for being the favorite pastime of 30-year-olds who live in their parents' basements, but that couldn't be farther from the truth. We will prove that coding is actually...</p>
        <div className="row centered">
          <div>
            <h3>simple</h3>
            <p>Not all coding is like Java - languages like Python are very readable and easy to pick up</p>
          </div>
          <div>
            <h3>fun</h3>
            <p>We will teach tools that enable you to actually make fun things with coding, like websites and video games</p>
          </div>
        </div>

        <h1 id="schedule">we meet Fridays!</h1>
        <img src="media/time.svg" style={{width: '100%'}} />
        <h1>schedule for first 5 days</h1>
        <img src="media/schedule.svg" style={{width: '100%'}} />

        <h1 id="topics">topics</h1>
        <h2>Python</h2>
        <p>we'll kick off our club with an exploration of Python and its potential in <b>video-game making</b></p>
        <h2>Web development</h2>
        <p>in January we'll start exploring the vast amount of tools availabe to web designers, beyond just plain HTML/CSS/JS</p>
        <p>we will also focus on teaching good <b>design principles</b></p>
        <h2>after that, who knows? more fun coding :)</h2>

        <h1 id="team">team</h1>
        <h2>Anton Outkine</h2>
      </div>
    )
  }
}

export default Component
