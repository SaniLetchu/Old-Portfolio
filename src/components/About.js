import styled from "styled-components"
import { Fade } from "react-reveal"
import Me from '../Assets/Images/me.jpg'
import Wrench from '../Assets/SVG/wrench.svg'
import Account from '../Assets/SVG/account.svg'

const Container = styled.section`
  padding: 4em;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  min-width: 0;
`

const Image = styled.img`
  width:  300px;
  height: 300px;
  object-fit: cover;
  clip-path: circle();
  z-index: -1;
`

const Span = styled.span`
  filter: drop-shadow(0px 0px 3px #E7DFDD);
  z-index: -1;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  width: 100%;
  gap: 25px;
  min-width: 0;
`

const Td = styled.td`
  text-align: center; 
  vertical-align: middle;
  padding: 10px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`

const Tr = styled.tr`
`


const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Svg = styled.img`
  height: 2rem;
  filter: invert(84%) sepia(1%) saturate(878%) hue-rotate(162deg) brightness(101%) contrast(94%);
`

const Profiletext = styled.p`
  font-family: Helvetica;
  color: #E7DFDD;
  font-size: 19px;
  letter-spacing: 1px;
  line-height: 1.3;
`

const About = () => {
  return (
    <Container>
      <Fade delay={300}>
        <Span>
          <Image src={Me}></Image>
        </Span>
      </Fade>
      <Content>
        <Fade delay={300}>
          <div>
            <Div>
              <Svg src={Account} alt="profile"></Svg>
              <h1 style={{color: "#E7DFDD"}}>Profile</h1>
            </Div>
            <Profiletext>
              I love to work with JavaScript technologies and anything related to programming. Right now my mind is focused on learning everything that is related to Web Development. I'm also passionate about exploring and learning new technologies to widen my toolset and to become an overall better developer.
              <br/>
              <br/>
              When I first started programming, I was absolutely enthralled by how it taps into my creative side. Programming has made me into a better self-learner and I am commited to the idea of life-long learning and practice.
            </Profiletext>
          </div>
        </Fade>
        <Fade delay={300}>
          <div>
            <Div>
              <Svg src={Wrench} alt="Technologies & Tools"></Svg>
              <h1 style={{color: "#E7DFDD"}}>Technologies & Tools</h1>
            </Div>
            <Table>
                <tbody>
                  <Tr>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                        width="48"
                        height="48"
                        alt="HTML"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>HTML5</strong>
                    </Td>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                        width="48"
                        height="48"
                        alt="CSS3"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>CSS3</strong>
                    </Td>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                        width="48"
                        height="48"
                        alt="JavaScript"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>JavaScript</strong>
                    </Td>
                  </Tr>
                  <Tr>
                  <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                        width="48"
                        height="48"
                        alt="TypeScript"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>TypeScript</strong>
                    </Td>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        width="48"
                        height="48"
                        alt="React"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>React</strong>
                    </Td>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                        width="48"
                        height="48"
                        alt="Redux"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Redux</strong>
                    </Td>
                  </Tr>
                  <Tr>
                  <Td>
                      <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/styled-components.svg"
                        style={{filter: "invert(84%) sepia(1%) saturate(878%) hue-rotate(162deg) brightness(101%) contrast(94%)"}}
                        width="48"
                        height="48"
                        alt="Styled-Components"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Styled-Components</strong>
                    </Td>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                        width="48"
                        height="48"
                        alt="GraphQL"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>GraphQL</strong>
                    </Td>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        width="48"
                        height="48"
                        alt="Node.js"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Node.js</strong>
                    </Td>
                  </Tr>
                  <Tr>
                  <Td>
                      <img
                        style={{filter: "invert(84%) sepia(1%) saturate(878%) hue-rotate(162deg) brightness(101%) contrast(94%)"}}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                        width="48"
                        height="48"
                        alt="Express"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Express</strong>
                    </Td>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        width="48"
                        height="48"
                        alt="MongoDB"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>MongoDB</strong>
                    </Td>
                    <Td>
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                        width="48"
                        height="48"
                        alt="PostgreSQL"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>PostgreSQL</strong>
                    </Td>
                  </Tr>
                  <Tr>
                  <Td>
                  <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        width="48"
                        height="48"
                        alt="Git"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Git</strong>
                    </Td>
                    <Td>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                        width="48"
                        height="48"
                        alt="Npm"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Npm</strong>
                    </Td>
                    <Td>
                      <img
                        style={{filter: "invert(84%) sepia(1%) saturate(878%) hue-rotate(162deg) brightness(101%) contrast(94%)"}}
                        src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/cypress.svg"
                        width="48"
                        height="48"
                        alt="Cypress"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Cypress</strong>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                        width="48"
                        height="48"
                        alt="Jest"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Jest</strong>
                    </Td>
                    <Td>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                        width="48"
                        height="48"
                        alt="Webpack"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Webpack</strong>
                    </Td>
                    <Td>
                      <img
                        style={{filter: "invert(84%) sepia(1%) saturate(878%) hue-rotate(162deg) brightness(101%) contrast(94%)"}}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg"
                        width="48"
                        height="48"
                        alt="Deno.js"
                      />
                      <br /><strong style={{color: "#E7DFDD", fontFamily: "Helvetica"}}>Deno.js</strong>
                    </Td>
                  </Tr>
                </tbody>
            </Table>
          </div>
        </Fade>
      </Content>
    </Container>
  )
}

export default About
