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
      link={'https://play.google.com/store/apps/details?id=com.mojang.minecraftpe'}
      />
      <DownloadCards 
      title={'Download on App Store'}
      linkname='Open'
      link={'https://apps.apple.com/us/app/minecraft/id479516143'}
      />
      <DownloadCards 
      title={'Add server link'}
      linkname='https://add.aternos.org/Ironmanletsplay'
      link={'https://add.aternos.org/Ironmanletsplay'}
      />
      <DownloadCards 
      title={'Whatsapp Group'}
      linkname='Join'
      link={'https://chat.whatsapp.com/JXj9qqxOvFC3ZlXaZbGqMZ'}
      />
    </div>
  )
}

export default Download