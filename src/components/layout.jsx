import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
`

const Layout = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

export default Layout


{/* <body>
<div class="wrapper">
  <aside>
    <ul>
      <li>Item</li>
      ...
    </ul>
  </aside>
  <main>
    <div class="wrapper_inner">
      <p>
        ...
       </p>
     </div>
   </main>
 </div>
</body> */}