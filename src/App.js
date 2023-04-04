import React from 'react'
import './app.scss'

import { Home, About, Gallery, City, Download, Footer, Nav } from './screens'
import Unavailable from './components/Unavailable'

const App = () => {
  return (
    <div>
      <div className='app__case' >
        <Nav />
        <Home />
        <About />
        {/* <Gallery /> */}
        <City />
        <Download />
        <Footer />
      </div>

      <div className='app__desktop__case' >
        <Unavailable />
      </div>

    </div>
  )
}

export default App