import React from 'react'

import '../styles/Un.scss'
import pet from '../images/dog.svg'

const Unavailable = () => {
  return (
    <div className='un__case' >
        <div className='un__text__case' >

            <h1>Sorry this website is only for mobile devices</h1>
            <img src={pet} alt='Dog' />
        </div>
    </div>
  )
}

export default Unavailable