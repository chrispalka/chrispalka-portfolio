import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 73.125rem;
    padding: 0 1rem;
    margin: 0 auto;
    border: 2px solid red;
`

const Layout = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

export default Layout
