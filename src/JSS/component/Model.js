import style from 'styled-components'

export const Body = style.div`
width: 250px;
height: 500px;
background: url("./images/allbody/bodynew.png");
position: absolute;
top: 12%;
left: 22%;
z-index: 1;
`
export const Contain = style.div`
width: 100%;
height: 590px;
background:url('${props => props.bg || ''}');
margin: 0 auto;
overflow:hidden;
position: relative;
`
export const BikiniTop = style(Body)`
background:url("./images/allbody/bikini_branew.png");
`
export const BikiniBot = style(BikiniTop)`
background: url("./images/allbody/bikini_pantsnew.png");
`
export const Face = style.div`
width: 60px;
height: 77px;
background: url("./../images/model/1000new.png");
position: absolute;
top: 5%;
left: 48%;
z-index: 1;
`