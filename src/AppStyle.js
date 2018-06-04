import styled from 'styled-components';
import { marine } from './theme/variables';

export const Wrapper = styled.div`
position: relative;
  background-image: url('${require('./assets/bg.jpg')}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  height: 90vh;
  width: 80%;
  background: rgba(4, 37, 41, 0.7);
  box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.75);
  margin: 0 auto;
`;

export const TitleStyled = styled.div`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700');
font-family: 'Amatic SC', cursive;
position: absolute;
height: 100%;
width: 30%;
background: url('${require('./assets/wolf.jpg')}') center center no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #000;
z-index: 2;
`;