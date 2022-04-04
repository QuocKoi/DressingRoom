import React from 'react'
import { Navbar } from '../JSS/component/Header'
import { H1 } from '../JSS/component/Header'
export default function Header() {
  return (
    <Navbar className='text-center p-5'>
        <img src='./images/cybersoft.png'/>
        <H1 className='p-4'>CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến - Virtual Dressing Room</H1>
    </Navbar>
  )
}
