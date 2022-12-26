import styled from "styled-components"
import { Fade } from "react-reveal"

const Container = styled.section`
  padding: 4em;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  min-width: 0;
`

const Image = styled.img`
  height: 60px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`

const Div = styled.div`
  display: flex;
  min-width: 0;
  gap: 40px;
  justify-content: space-evenly;
  align-items: center;
`

const Profiletext = styled.p`
  font-family: Helvetica;
  color: #E7DFDD;
  font-size: 19px;
  letter-spacing: 1px;
  line-height: 1.3;
`

const Contact = () => {
  return (
    <Container>
      <Fade delay={300}>
        <Profiletext>
        If you have an opportunity to share, or would like to discuss anything, you can contact me from these platforms.
        </Profiletext>
      </Fade>
      <Fade delay={300}>
        <Div>
          <a href="mailto:sani.letchu@gmail.com" target="_blank" rel="noreferrer"><Image src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg" alt="Email"/></a>
          <a href="https://www.linkedin.com/in/sani-letchu-a90a00179/" target="_blank" rel="noreferrer"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Linkedin"/></a>
          <a href="https://github.com/SaniLetchu" target="_blank" rel="noreferrer"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" style={{filter: "invert(26%) sepia(100%) saturate(1340%) hue-rotate(263deg) brightness(97%) contrast(95%)"}}/></a>
        </Div>
      </Fade>
    </Container>
  )
}

export default Contact