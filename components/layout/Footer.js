import styled from 'styled-components'

const Bar = styled.div`
   background: #0e1118;
   height: 65px;
   line-height: 65px;
   color: #666;
   text-align: center;
`

const Footer = () => (
  <div>
    <Bar>
      Copyright 2019 © Cihai Sun, All Rights Reserved
    </Bar>
  </div>
)

export default Footer;
