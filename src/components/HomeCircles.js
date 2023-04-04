import React from 'react'
import '../styles/HomeCircles.scss'
import { Fade } from 'react-awesome-reveal'

const HomeCircles = ({ forImg, altTag, title, text }) => {
  return (
    <Fade>
      <div className='circle__case' >
          <div className='circle__image__case' >
              <img src={forImg} alt={altTag} />
          </div>

          <h2>{title}</h2>
          <p>{text}</p>

      </div>
    </Fade>
  )
}

export default HomeCircles