import React from 'react'
import './app.scss'
import { Home, About, Gallery, City, Download, Footer, Nav } from './screens'
import Unavailable from './components/Unavailable'

const multi = [
  { url: "./image-1.jpg", title: "sky" },
  { url: "./image-2.jpg", title: "team" },
  { url: "./image-3.jpg", title: "view" },
  { url: "./image-4.png", title: "clear" },
  { url: "./image-5.jpg", title: "skeleton" },
  { url: "./image6.jpeg", title: "in game" },
  { url: "./image7.jpeg", title: "in game" },
  { url: "./image8.jpeg", title: "in game" },
  { url: "./image9.jpeg", title: "in game" },
  { url: "./image10.jpeg", title: "in game" }
]

const App = () => {
  return (
    <div>
      <div className='app__case' >
        <Nav />
        <Home />
        <About />
        <Gallery
        slides={multi}
        />
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