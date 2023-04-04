import React, { useEffect, useRef } from 'react'

import Lottie from 'lottie-web'
import animationData from '../animations/down.json'

const Down = () => {
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

export default Down