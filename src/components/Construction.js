import React, { useRef, useEffect } from 'react'

import Lottie from 'lottie-web'
import animationData from '../animations/underConstruction.json'


const Construction = () => {
    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        })

        return () => {
            Lottie.destroy();
          };
    }, [])

  return (
    <div ref={container} />
  )
}

export default Construction