import React from 'react'
import '../styles/Download.scss'
import DownloadCards from '../components/DownloadCards'

const Download = () => {
  return (
    <div className='download' >
      <h1>The links you need </h1>
      <DownloadCards 
      title={'Download on Play Store'}
      linkname='Open'
      link={''}
      />
      <DownloadCards 
      title={'Download on App Store'}
      linkname='Open'
      link={''}
      />
      <DownloadCards 
      title={'Add server link'}
      linkname='https://add.aternos.org/Ironmanletsplay'
      link={'https://add.aternos.org/Ironmanletsplay'}
      />
      <DownloadCards 
      title={'Whatsapp Group'}
      linkname='Join'
      link={''}
      />
    </div>
  )
}

export default Download