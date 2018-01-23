import React from 'react'
import style from './stylesheet.css'
class Component extends React.Component {
  render () {
    return (
    <div className={style.main}>
      <img src="media/ncplogo.svg" style={{width:'500px', margin: '50px auto'}} className="horizontal-center" />
      <div className="row" style={{width: '350px', margin: 'auto'}}>
        <a href="https://github.com/NCPCode"><img src="media/github.svg" className={style.icon} /></a>
        <a href="https://www.facebook.com/groups/1586369904743034/"><img src="media/facebook.svg" className={style.icon} /></a>
      </div>
      <div className={style.interestedContainer}><a href="https://goo.gl/forms/FBQlC3rFfSVrT2qF3" className={style.interested}>Robot Race RSVP!</a></div>
      <p>The robot race will take place from 3:05 to 5 the Tuesday after finals in the 3rd floor computer lab, with the official 'race' being held at 4:50. During this time you will have access to a Lego Mindstorms kit which will include various lego bits and pieces along with Motors and other sensors to help you build the fastest racer. You will be able to code it using the NXT language available on the computers in the 3rd floor lab. <b>Bring your friends and build robots with us in a chill atmosphere.</b> What could be better?</p>
      <div className={style.interestedContainer}><a href="https://goo.gl/forms/UBlD0j7ZpipT65Xa2" className={style.interested}>Sign up</a></div>
      <h1 id="summary">How this works</h1>
      <div className={"row centered"}>
        <div className="el-3">
          <img src="media/question.svg" style={{maxWidth:'300px'}} />
          <p>You know nothing about computers</p>
        </div>
        <img src="media/arrow.svg" style={{maxWidth:'250px'}} />
        <div className="el-3">
          <img src="media/programmer.svg" style={{maxWidth:'300px'}} />
          <p>You can make websites, games, and other awesome applications</p>
        </div>
      </div>
      <h1>Coding can be fun!</h1>
      <p>Coding is notorious for being the favorite pastime of 30-year-olds who live in their parents' basements, but that couldn't be further from the truth. We will prove that coding is actually...</p>
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
      <h1 id="schedule">We meet on Wednesdays!</h1>
      <p>NCP Code takes place in the 3rd floor computer lab. Here's a rough outline of the first six days</p>
      <img src="media/schedule2.svg" style={{width: '100%'}} />
      <h1>Meeting timeline</h1>
      <img src="media/time2.svg" style={{width: '100%'}} />
      <h1 id="topics">Topics</h1>
      <h2>Python</h2>
      <p>we'll kick off our club with an exploration of Python and its potential in <b>video-game making</b></p>
      <h2>Web development</h2>
      <p>in January we'll start exploring the vast amount of tools availabe to web designers, beyond just plain HTML/CSS/JS</p>
      <p>we will also focus on teaching good <b>design principles</b></p>
      <h2>after that, who knows? more fun coding :)</h2>
      <h1 id="team">team</h1>
      <div className={style.teamCard}>
        <div className="row">
          <a href="https://github.com/Jetmate"><img src="media/github.svg" className={style.icon} /></a>
          <a href="https://www.linkedin.com/in/antonoutkine/"><img src="media/linkedin.svg" className={style.icon} /></a>
          <a href="http://antonoutkine.com"><h2>Anton Outkine</h2></a>
        </div>
        <div className="row">
          <a href="https://github.com/justinwzig"><img src="media/github.svg" className={style.icon} /></a>
          <a href="https://www.linkedin.com/in/justinwzig/"><img src="media/linkedin.svg" className={style.icon} /></a>
          <a href="http://justinwzig.github.io"><h2>Justin Ziegelmueller</h2></a>
        </div>
        <div className="row">
          <a href="https://github.com/mbarz6"><img src="media/github.svg" className={style.icon} /></a>
          <h2>Michael Barz</h2>
        </div>
        <div className="row">
          <a href="https://github.com/anakum"><img src="media/github.svg" className={style.icon} /></a>
          <h2>Aayushi Nakum</h2>
        </div>
        <div className="row">
          <h2>Matthew Early</h2>
        </div>
        <div className="row">
          <a href="https://github.com/cmsparks"><img src="media/github.svg" className={style.icon} /></a>
          <h2>Christrian Sparks</h2>
        </div>
        <div className="row">
          <h2>Molly Wehrenberg</h2>
        </div>
      </div>
    </div>
    )
  }
}
export default Component
