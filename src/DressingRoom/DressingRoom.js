import React from 'react'
import { LineShawdow } from '../JSS/component/line'
import Header from './Header'
import Model from './Model'
import NavTab from './NavTab'

export default function DressingRoom() {
  return (
    <div className='container-fluid'>
      <Header></Header>
      <LineShawdow></LineShawdow>
      <div className='row'>
        <div className='col-8'><NavTab></NavTab></div>
        <div className='col-4'><Model></Model></div>
      </div>
    </div>
  )
}
