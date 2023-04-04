import React from 'react'
import '../styles/DownloadCards.scss'

const DownloadCards = ({ title, link, linkname }) => {
  return (
    <div className='downloadcards' >
        <h2>{title}</h2>
        <a href={link} >{linkname}</a>
    </div>
  )
}

export default DownloadCards