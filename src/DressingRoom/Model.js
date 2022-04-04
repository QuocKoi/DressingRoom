import React from 'react'
import '../assets/css/style.css'
import { useTransition, animated,use } from 'react-spring';
import { useSelector } from 'react-redux';
import { BikiniBot, BikiniTop, Body, Contain, Face, Feet, HairStyle, Handbag, Necklace, } from '../JSS/component/Model'
export default function Model() {
  let outFit = useSelector(state => state.dressingRoomReducer.outFit);
  let transitionsOutFit = useTransition(outFit, {
    from: { opacity: 0, left: `-100%`,top:`-80%` },
    enter: { opacity: 1, left:`-3%`,top:`-75%` },
    leave: { opacitys: 0, left: `-100%`,top:`-80%` },
    config: { duration: 500 }
  })
  let render = () => {
    return transitionsOutFit((props, item) => {
      let {opacity,left,top}=props;
      if (item.type !== 'background'&&item.type!=='hairstyle') {
        return <animated.div className={item.type} style={{ opacity: opacity, background: `url(${item.imgSrc_png})`,left:left }}></animated.div>
      }
      if(item.type==='hairstyle'){
        return <animated.div className={item.type} style={{ opacity: opacity, background: `url(${item.imgSrc_png})`,top:top}}></animated.div>
      }
    })
  }
  return (
    <Contain style={{ background: `url(${outFit[0].imgSrc_png})` }}>
      <Face></Face>
      <Body></Body>
      <BikiniTop></BikiniTop>
      <BikiniBot></BikiniBot>
      {render()}
    </Contain>
  )
}
