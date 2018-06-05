import styled from 'styled-components';
import { light, marine, pink } from './theme/variables';

export const Wrapper = styled.div`
position: relative;
  background: url('${require('./assets/bg.jpg')}') center center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    'title title title title form form form form'
    'title title title title weather weather weather weather'
    'title title title title weather weather weather weather';
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
grid-area: title;
height: 100%;
background: url('${require('./assets/wolf.jpg')}') left center no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 10%;
z-index: 2;
`;

export const FormStyled = styled.div`
grid-area: form;
osition: absolute;
padding: 10%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
z-index: 2;
 & input {
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px ${light};
  width: 30%;
  padding-bottom: 4px;
  color: ${light};
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-right: 20px;
  font-size: 20px;
  outline: none;
 }
 & input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px ${marine} inset;
  -webkit-text-fill-color: ${light};
 }
 & button {
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700');
  font-family: 'Amatic SC', cursive;
  border: 0;
  padding: 8px 20px;
  margin: 0 2px;
  border-radius: 2px;
  letter-spacing: 1px;
  font-size: 15px;
  cursor: pointer;
  background-color: ${pink};
  color: ${marine};
  outline: none;
 }
`;

export const WeatherStyled = styled.div`
grid-area: weather;
osition: absolute;
padding: 10%;
font-size: 20px;
letter-spacing: 2px;
z-index: 2;
`;