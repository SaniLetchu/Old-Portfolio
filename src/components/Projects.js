import styled from "styled-components"
import CV from "../Assets/Images/CV.png"
import Battleship from "../Assets/Images/Battleship.png"
import Drill from "../Assets/Images/Drill.png"
import Laptop from "../Assets/SVG/laptop.svg"
import { Fade } from "react-reveal"

const Container = styled.section`
  padding: 4em;
  display: flex;
  gap: 100px;
  min-width: 0;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  width: 100%;
  min-width: 0;
  gap: 20px;
`


const Title = styled.h1`
  align-self: start;
  font-family: Helvetica;
  font-size: 35px;
  color: #E7DFDD;
  margin-top: 0;
  margin-bottom: 5px;
`



const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;
`

const Image = styled.img`
  max-width: 90%;
  max-height: 100%;
  cursor: pointer;
  transition: 0.8s;
  align-self: center;
  border-radius: 10px;
  box-shadow: rgba(231, 223, 221, 0.6) 25px 25px 25px -12px;
  &:hover {
    box-shadow: rgba(231, 223, 221, 0.25) 25px 25px 25px -12px;
  }
`

const Profiletext = styled.p`
  font-family: Helvetica;
  color: #E7DFDD;
  font-size: 19px;
  letter-spacing: 1px;
  line-height: 1.3;
`

const ButtonDiv = styled.div`
  display: flex;
  gap: 30px;
  background-color:
`

const Button = styled.a`
  font-family: Helvetica;
  color: #E7DFDD;
  display: inline-block;
  text-decoration: none;
  transition: 0.2s;
  padding: 10px 10px 10px 10px;
  background-color: #4717F6;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`
const Svg = styled.img`
  height: 2rem;
  filter: invert(84%) sepia(1%) saturate(878%) hue-rotate(162deg) brightness(101%) contrast(94%);
`


const Projects = () => {
  return (
    <Container>
      <Content>
        <Fade delay={300}>
          <a style={{alignSelf: "center"}} href="https://saniletchu.github.io/CV-Application/"><Image src={CV}></Image></a>
        </Fade>
        <Fade delay={300}>
          <Div>
            <div>
              <Title><strong>CV-Application</strong></Title>
              <Profiletext>React application where you can create your own CV <br/> and then save it as PDF using react-to-print.</Profiletext>
              </div>
            <ButtonDiv>
              <Button href="https://saniletchu.github.io/CV-Application/"><Svg src={Laptop}></Svg></Button>
              <Button href="https://github.com/SaniLetchu/CV-Application"><Svg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"></Svg></Button>
            </ButtonDiv>
          </Div>
        </Fade>
      </Content>
      <Content>
        <Fade delay={300}>
          <a style={{alignSelf: "center"}} href="https://saniletchu.github.io/Battleship/"><Image src={Battleship}></Image></a>
        </Fade>
        <Fade delay={300}>
          <Div>
            <div>
              <Title><strong>Battleship</strong></Title>
              <Profiletext>Typical Battleship game where you play against AI.<br/>However, the AI just shoots randomly</Profiletext>
              </div>
            <ButtonDiv>
              <Button href="https://saniletchu.github.io/Battleship/"><Svg src={Laptop}></Svg></Button>
              <Button href="https://github.com/SaniLetchu/Battleship"><Svg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"></Svg></Button>
            </ButtonDiv>
          </Div>
        </Fade>
      </Content>
      <Content>
        <Fade delay={300}>
          <a style={{alignSelf: "center"}} href="https://drill-and-practice1.herokuapp.com/"><Image src={Drill}></Image></a>
        </Fade>
        <Fade delay={300}>
          <Div>
            <div>
              <Title><strong>Drill and Practice</strong></Title>
              <Profiletext>Web application built with Deno and PostgreSQL. <br/>The application uses a three-tier architecture (client, server, database) <br/>
              and a layered architecture with four layers (views, controllers, services, database). <br/><br/> In the application you can create topics with multiple questions and answers. <br/> Then you can take quizzes on them</Profiletext>
              </div>
            <ButtonDiv>
              <Button href="https://drill-and-practice1.herokuapp.com/"><Svg src={Laptop}></Svg></Button>
              <Button href="https://github.com/SaniLetchu/Drill-and-practice-Deno"><Svg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"></Svg></Button>
            </ButtonDiv>
          </Div>
        </Fade>
      </Content>
      <Content>
        <Fade delay={300}>
          <a style={{alignSelf: "center"}} href="https://github.com/SaniLetchu/SortingAlgorithmVisualizer"><Image src="https://user-images.githubusercontent.com/92727936/190877772-b6d0cbcc-510a-477a-a79a-f7caf37e62fd.gif"></Image></a>
        </Fade>
        <Fade delay={300}>
          <Div>
            <div>
              <Title><strong>Sorting Algorithm Visualizer</strong></Title>
              <Profiletext>Application built with C++ and SFML library.<br/>Application visualizes some of the basic sorting algorithms.</Profiletext>
              </div>
            <ButtonDiv>
              <Button href="https://github.com/SaniLetchu/SortingAlgorithmVisualizer"><Svg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"></Svg></Button>
            </ButtonDiv>
          </Div>
        </Fade>
      </Content>
      <Content>
        <Fade delay={300}>
          <a style={{alignSelf: "center"}} href="https://github.com/SaniLetchu/Tower-Defence-Game"><Image src="https://user-images.githubusercontent.com/92727936/194776151-fa752d17-fc9c-49f9-b82c-35e624fa97f6.gif"></Image></a>
        </Fade>
        <Fade delay={300}>
          <Div>
            <div>
              <Title><strong>Tower Defence Game</strong></Title>
              <Profiletext>Application built with C++ and SFML library.<br/>Typical Tower Defence Game with in game map maker and highscore. <br/><br/> 
              This project was done in a group of four people.</Profiletext>
              </div>
            <ButtonDiv>
              <Button href="https://github.com/SaniLetchu/Tower-Defence-Game"><Svg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"></Svg></Button>
            </ButtonDiv>
          </Div>
        </Fade>
      </Content>
    </Container>
  )
}

export default Projects