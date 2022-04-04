import styled from 'styled-components'

export const Ul = styled.ul`
&.nav-tabs{
    border:none;
}

`
export const Li = styled.li`
&.nav-item{
    
}
`
export const Button = styled.button`
&.nav-link{
    padding:20px 33px;
    background-color:#1b1f21;
    color:white;
    border-radius:0;
    font-weight:bold;
    &.active{
        color:white;
        background-color:#d6b161;
        }
}


`
export const ButtonBuy = styled.button`
background-color:#1b1f21;
    color:white;
&:focus{
    background-color:#d6b161
}
&.btn{
   &:hover{
    color:white
   }
   &:focus{
       box-shadow:none
   }
}
`