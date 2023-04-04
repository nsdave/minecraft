import React from 'react'
import '../styles/About.scss'

const About = () => {
  return (
    <div className='about__case' >
      <h2>About</h2>

      <div className='about__card__case' >
        <div className='about__card card__first ' >
          <h1>MINECRAFT</h1>
          <p>
          Explore your own unique world, survive the night, 
          and create anything you can imagine!
          </p>
        </div>
        <div className='about__card card__second ' >
          <h1>OUR SERVER</h1>
          <p>
          Enjoy minecraft with us on our server where we 
          can have a zombie threatened society 🙂
          </p>
        </div>
      </div>

    </div>
  )
}

export default About