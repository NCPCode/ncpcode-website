import React from 'react'
import style from './stylesheet.css'

class Component extends React.Component {
  render () {
    return (
      <div className={style.main}>
        <p>NCP Code is Northside's premier CCC (cool coding club)!!!</p>
        <p>No friends? Never touched a computer before? Cry upon hearing that a Java class is mandatory for graduation? Well, you've come to the right place! At NCP Code, we'll teach coding completely from scratch, presenting the information in a simple, easy to understand format.</p>
        <p>The key phrase here is <em>fun</em>. Coding is notorious for being the favorite pastime of 30 year olds who live in their mothers' basements, but we hope to prove otherwise. Not only is coding becoming a skill of interest for job applications, but it unlocks the potential for creation. Although many of us know Java, that's an example of a language that's boring and pedantic. At NCP Code, you'll learn genuinely exciting languages that will change how you see coding.</p>
        <p><em>Not only can coding be fun and engaging, but it also looks great on an application.</em> The best way to discover the multifaceted world (and totally awesome community) of coding is to join in for yourself.</p>
        <h2>Schedule and Format</h2>
        <p>NCP Code will meet every Friday in room 301 (3rd-floor computer lab) starting October 20. The meetings will go from 3:30 to 4:30.</p>
        <p>Each meeting will function as a mini-hackathon. This means that first you will be taught some coding-related topic, and then you will have the chance to test your understanding by spending about 20 minutes making something (no sweat, it's super informal; there's room for error). While this happens, you will receive constant advice and support from industry professionals who have years of experience. At the end of the hackathon, everyone will get a chance to (voluntarily) show off their creations.</p>
        <p>If you aren't already hooked:
          <div id="food">WE WILL HAVE FREE FOOD!</div>
        </p>
        <h2>About</h2>
        <p>NCP Code is run by high-schoolers like you! On the leadership team are:</p>
        <ul>
          <li>Matthew Early (mmearly@cps.edu)</li>
          <li>Anton Outkine (aaoutkine@cps.edu)</li>
          <li>Christian Sparks (cmsparks@cps.edu)</li>
          <li>Justin Ziegelmueller (jziegelmuel@cps.edu)</li>
          <li>Aayushi Nakum (anakum@cps.edu)</li>
        </ul>
        <p>We are a member of <a href="https://hackclub.com/">HackClub</a>.</p>
      </div>
    )
  }
}

export default Component
