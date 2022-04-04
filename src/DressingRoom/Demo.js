import React from 'react'
import { useSpring,animated } from 'react-spring'
export default function Demo() {
    let styles=useSpring({
        num:1000,
        from:{num:1}
    })
  return (
    <animated.div>{styles.num}</animated.div>
  )
}
