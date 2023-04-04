import React from 'react'
import '../styles/Footer.scss'

import rage from '../images/logo-png.png'


const Footer = () => {
  return (
    <div className='footer__case' >

      <div className='footer__top' >
        <h2>MINECRAFT</h2>
        <div>
          <img src={rage} alt='for rage' />
        </div>
      </div>

      <div className='footer__bottom' >
        <p>Lets Mine and Craft</p>
      </div>
    </div>
  )
}

export default Footer