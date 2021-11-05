import { motion } from 'framer-motion'
import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import space from '../assets/Images/purple.jpg' 


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;


h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
}
`

const Space = styled.div`
background-repeat: no-repeat;
background-position: 0px 85px;
-webkit-background-size: 100% 100%;
-moz-background-size: 100% 100%;
-o-background-size: 100% 100%;
background-size: 100% 100%;
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: #ff8da1;
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const BLOG = styled(NavLink)`
color: #ff8da1;
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const WORK = styled(NavLink)`
color: #ff8da1;
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index: 1;
`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
color: #ff8da1;
text-decoration: none;
z-index: 1;
`

const SKILLS = styled(NavLink)`
color: #ff8da1;
text-decoration: none;
z-index: 1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: crosshair;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
color: #ff8da1;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`




const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <Space> 
                <img src={space} alt='purplespacescape' />
            </Space>
            <DarkDiv click={click}/>
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' : 'light'} />
            <SocialIcons theme={click ? 'dark' : 'light'} />
            <Center click={click}>
                <YinYang onClick={() => handleClick()} width={click ? 120: 200} height={click ? 120 : 200} fill='#ff8da1' />
                <span>click the sphere</span>
            </Center>
            <Contact target='_blank' to={{pathname:'mailto:suwinfield1s@gmail.com'}}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay: 1}
                }}
                 animate={{
                     y:0,
                     transition: { type:'spring', duration: 1.5, delay: 1}
                 }}
                 whileHover={{scale: 1.1}}
                 whileTap={{scale:0.9}}   
                >
                    email me...
                </motion.h2>
            </Contact>
            <BLOG to='/blog'>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay: 1}
                }}
                 animate={{
                     y:0,
                     transition: { type:'spring', duration: 1.5, delay: 1}
                 }}
                 whileHover={{scale: 1.1}}
                 whileTap={{scale:0.9}}
                >
                    blog.
                </motion.h2>
            </BLOG>
            <WORK to='/work' click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay: 1}
                }}
                 animate={{
                     y:0,
                     transition: { type:'spring', duration: 1.5, delay: 1}
                 }}
                 whileHover={{scale: 1.1}}
                 whileTap={{scale:0.9}}  
                >
                    projects.
                </motion.h2>
            </WORK>
            <BottomBar>
                <ABOUT to='/about' click={+click}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay: 1}
                    }}
                     animate={{
                         y:0,
                         transition: { type:'spring', duration: 1.5, delay: 1}
                     }}
                     whileHover={{scale: 1.1}}
                     whileTap={{scale:0.9}}    
                    >
                        me.
                    </motion.h2>
                </ABOUT>
                <SKILLS to='/skills'>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay: 1}
                    }}
                     animate={{
                         y:0,
                         transition: { type:'spring', duration: 1.5, delay: 1}
                     }}
                     whileHover={{scale: 1.1}}
                     whileTap={{scale:0.9}}  
                    >
                        skills.
                    </motion.h2>
                </SKILLS>
            </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main
