import React from 'react'
import styled, { keyframes, ThemeProvider} from 'styled-components'
import {darkTheme} from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'
import img from '../assets/Images/twitpptemp2-removebg-preview.png'
// import cherry from '../assets/animated/cherry.mp4'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

`
const float = keyframes`
0% { transform: translateY(-10px) };
50% { transform: translateY(-15px) translateX(-15px) };
100% { transform: translateY(-10px) };
`


const Girl = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
`


const AboutPage = () => {
    return (

        <ThemeProvider theme={darkTheme}>
<Box>
    
<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark'/>
    {/* <video autoPlay loop muted src={cherry} type='video/mp4'/> */}
        <Girl>
            <img src={img} alt='Girl' />
        </Girl>
        <Main>
        I'm a software engineer located in the U.S. I enjoy utilizing my creative and analytical skills to optimize software applications. 
<br /> <br />
I modify existing software applications in addition to creating new ones to optimize user experiences. I believe quality need not be sacrificed to convenience. 
<br /> <br />
I enjoy designing software applications that are clean, attractive, swift, convivial, and secure.
        </Main>
        <BigTitle text='ABOUT' top='10%' left='5%' />
</Box>
        </ThemeProvider>
    )
}

export default AboutPage
