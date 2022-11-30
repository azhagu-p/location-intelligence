import React from "react";
import styled, {keyframes} from 'styled-components'

export default function TextAnimation() {
   return(
       <Wrapper>
          <h1>ALL-PINGS</h1>
          <h1>Location Intelligence Platform</h1>
       </Wrapper>
   )
}


const animation = keyframes`
 0% {opacity: 0; }
 25% {opacity: 1; }
 75% {opacity: 1; }
 100% { opacity: 1 }
`

const Wrapper = styled.span`
 opacity: 0;
 animation-name: ${animation};
 animation-duration: 6s;
 animation-fill-mode: forwards;
 animation-iteration-count: infinite;
`