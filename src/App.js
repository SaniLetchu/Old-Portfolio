import styled from "styled-components"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import { Fade } from "react-reveal"
import Typewriter from 'typewriter-effect';
import Arrow from './Assets/SVG/arrow.svg'


const H1 = styled.h1`
  text-align:center;
  font-family: Helvetica, sans-serif;
  text-transform:uppercase;
  font-weight:100;
  color: #E7DFDD;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 20px 0;
  grid-gap: 20px;
  &:after {
    content: " ";
    display: block;
    border-bottom: 1px solid #E7DFDD;
  }
  &:before {
    content: " ";
    display: block;
    border-bottom: 1px solid #E7DFDD;
  }
`

const NAV = styled.nav`
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
  margin-bottom: 2em;
  z-index: 2;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const UL = styled.ul`
  background-color: rgb(15,15,15);
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  box-shadow: 0 4px 2px -2px rgb(5,5,5);
  gap: 3.5em;
  padding: 1em;
  padding-right: 228px;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1em;
  }
`

const LI = styled.li`
  text-decoration: none;
`

const Home = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const EntryText = styled.p`
  margin: 0;
  color: #E7DFDD;
  font-size: 40px;
  font-family: Helvetica;
`

const Link = styled.a`
  font-size: 20px;
  font-family: Helvetica;
  color: #E7DFDD;
  display: inline-block;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    color: grey;
  }
`

const Button = styled.a`
  font-size: 40px;
  font-family: Helvetica;
  color: #E7DFDD;
  margin: 10px;
  display: inline-block;
  text-decoration: none;
  transition: 0.8s;
  padding: 10px 10px 10px 10px;
  background-color: #4717F6;
  border-radius: 10px;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }
`

const ArrowImg = styled.img`
  height: 2rem;
  vertical-align: middle;
  filter: invert(84%) sepia(1%) saturate(878%) hue-rotate(162deg) brightness(101%) contrast(94%);
  animation: filter-animation 1s infinite;  
  @keyframes filter-animation {
    0% { transform: scale(1); }
    20% { transform: scale(1.2); }
    40% { transform: scale(1.3); }
    60% { transform: scale(1.3); }
    80% { transform: scale(1.2); }
    100% { transform: scale(1);  }
  }
`

const App = () => {

  const handleEvent = (event) => {
    event.preventDefault()
    const el = document.querySelector(event.target.getAttribute("href"))
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
      <Container>
        <Home>
            <Fade delay={1000}>
              <EntryText>Hi, I'm <strong style={{color: "#BF0000"}}>Sani</strong>.</EntryText>
            </Fade>
            <Fade delay={2000}>
            <EntryText>
              <Typewriter
                options={{           
                  strings: ['Front-end dev', 'Back-end dev', 'Full Stack dev'],
                  autoStart: true,
                  loop: true,
                }}
                />          
              </EntryText>
            </Fade>
            <Fade delay={4000}>
              <Button href="#about" onClick={handleEvent}>Get to know me<ArrowImg src={Arrow}></ArrowImg></Button>
            </Fade>
        </Home>
        <NAV>
          <UL>
            <LI>
              <Link href="#about" onClick={handleEvent}>About</Link>
            </LI>
            <LI>
              <Link href="#projects" onClick={handleEvent}>Projects</Link>
            </LI>
            <LI>
              <Link href="#contact" onClick={handleEvent}>Contact</Link>
            </LI>
          </UL>
        </NAV>
        <H1 id="about"><strong>About</strong></H1>
        <About />
        <H1 id="projects"><strong>Projects</strong></H1>
        <Projects />
        <H1 id="contact"><strong>Contact</strong></H1>
        <Contact />
        <Footer />
      </Container>
  )
}

export default App
