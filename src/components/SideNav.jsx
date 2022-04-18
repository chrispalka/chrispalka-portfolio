import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const NavContainer = styled.div`
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: fixed;
    left: 10%;
    top: 0;
    width: 15%;
    min-width: 15%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #0d1821;
    a {
        font-size: 2vw;
        text-transform: uppercase;
        padding: 2rem;
        transition: transform 0.2s;
        .active {
            color: red;
        }
    }
    a:hover {
        transform: scale(1.5);
    }
`

const navLinks = [
    {
        name: 'home',
    },
    {
        name: 'about',
    },
    {
        name: 'projects',
    },
    {
        name: 'contact',
    },
]

const SideNav = () => (
    <NavContainer>
        {navLinks.map((link, i) => (
            <AnchorLink to={`/#${link.name}`} key={i}>
                {link.name}
            </AnchorLink>
        ))}
    </NavContainer>
)

export default SideNav
