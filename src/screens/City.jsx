import React from 'react'
import '../styles/City.scss'
import Construction from '../components/Construction'
import Line from '../components/Line'

const City = () => {
  return (
    <div className='city__case' >
      <h2>The Estate</h2>

      <div className='city__animation' >
        <Construction />
      </div>

      <div className='city__image__case' >

        <div className='city__first__case' >
          <div className='city__image city__first' />
          <h3>Site before construction</h3>
        </div>

        <div className='line__animation' >
          <Line />
        </div>

        <div className='city__image city__second' />
        <div className='city__image city__third' />
        <div className='city__image city__fourth' />
      </div>
      <p>Player combat arena <span>Coming Soon 👷‍♂️</span></p>
    </div>
  )
}

export default City