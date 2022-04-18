import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import GlobalStyle from '../components/GlobalStyles'
import SideNav from '../components/SideNav'
import '@fontsource/lato'

// styles
const IntroSection = styled.section`
    font-family: lato;
    font-weight: 100;
    font-size: 5vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AboutSection = styled.section`
    font-family: lato;
    font-weight: 100;
    font-size: 5vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ProjectSection = styled.section`
    font-family: lato;
    font-weight: 100;
    font-size: 5vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContactSection = styled.section`
    font-family: lato;
    font-weight: 100;
    font-size: 5vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SectionWrapperInner = styled.div`
    margin-top: 0;
    margin-bottom: 0;
    margin-right: auto;
    margin-left: 20%;
    height: 100vh;
    width: 80%;
`

const SectionWrapperMain = styled.div`
    height: 100vh;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

// markup
const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <SideNav />
                <SectionWrapperMain>
                    <SectionWrapperInner>
                        <IntroSection id="home">CHRIS PALKA</IntroSection>
                        <AboutSection id="about">ABOUT ME</AboutSection>
                        <ProjectSection id="projects">PROJECTS</ProjectSection>
                        <ContactSection id="contact">CONTACT</ContactSection>
                    </SectionWrapperInner>
                </SectionWrapperMain>
            </Layout>
        </>
    )
}

export default IndexPage
