import styled from "styled-components"
import Heart from '../Assets/SVG/heart.svg'

const Container = styled.section`
  background-color: rgb(15,15,15);
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`

const Svg = styled.img`
  height: 1rem;
  vertical-align: middle;
  filter: invert(12%) sepia(85%) saturate(3442%) hue-rotate(5deg) brightness(90%) contrast(127%);
  animation: heartbeat 1.3s infinite;
  #heart:before,
  &:after {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: #fff;
      -moz-border-radius: 50px 50px 0 0;
      border-radius: 50px 50px 0 0;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-transform-origin: 0 100%;
      -moz-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      -o-transform-origin: 0 100%;
      transform-origin: 0 100%;
  }
  &:after {
      left: 0;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transform-origin: 100% 100%;
      -moz-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
      -o-transform-origin: 100% 100%;
      transform-origin :100% 100%;
  }



  @keyframes heartbeat
  {
    0%
    {
      transform: scale( .75 );
    }
    20%
    {
      transform: scale( 1 );
    }
    40%
    {
      transform: scale( .75 );
    }
    60%
    {
      transform: scale( 1 );
    }
    80%
    {
      transform: scale( .75 );
    }
    100%
    {
      transform: scale( .75 );
    }
  }
`


const Profiletext = styled.p`
  font-family: Helvetica;
  color: #E7DFDD;
  font-size: 19px;
  letter-spacing: 1px;
  line-height: 1.3;
`
const Footer = () => {
  return (
    <Container>
      <Profiletext>Made with <Svg src={Heart}></Svg> by Sani Letchu</Profiletext>
    </Container>
  )
}

export default Footer