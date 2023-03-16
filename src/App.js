import React from 'react'
import './app.scss'

import { Home, About, Gallery, City, Download, Footer } from './screens'

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Gallery />
      <City />
      <Download />
      <Footer />
    </div>
  )
}

export default App