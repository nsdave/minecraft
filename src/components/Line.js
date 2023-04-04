import React, { useEffect, useRef } from 'react'

import Lottie from 'lottie-web'
import animationData from '../animations/line.json'


const Line = () => {
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

export default Line