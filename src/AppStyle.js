import styled from 'styled-components';
import { light, marine, pink } from './theme/variables';
import media from './theme/media';

export const Wrapper = styled.div`
  position: relative;
  background: url('${require('./assets/bg.jpg')}') center center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Container = styled.div`
  position: absolute;
  height: 90%;
  width: 80%;
  background: rgba(4, 37, 41, 0.7);
  box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.75);
  margin: 0 auto;
  z-index: 2;
`;

export const TitleStyled = styled.div`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700');
font-family: 'Amatic SC', cursive;
position: absolute;
height: 60%;
background: url('${require('./assets/wolf.jpg')}') left center no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 10%;
z-index: 2;
width: 100%;
font-size: 20px;
${media.tablet`
  width: 100%;
  font-size: 22px;
  height: 60%;
`}
${media.desktop`
  width: 40%;
  font-size: 25px;
  height: 100%;
`}
${media.xldesktop`
  width: 40%;
  font-size: 25px;
  height: 100%;
`}
`;

export const FormWeatherContainer = styled.div`
position: absolute;
height: 100%;
right: 0;
background: rgba(4, 37, 41, 0.35);
width: 100%;
top: 60%;
${media.tablet`
  width:100%;
  top: 60%;
`}
${media.desktop`
  width: 60%;
  top: 0;
`}
${media.xldesktop`
  width: 60%;
  top: 0;
`}
`;

export const FormStyled = styled.div`
position: absolute;
padding: 10%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
z-index: 2;
 `;

 export const Input = styled.input`
  @import url('https://fonts.googleapis.com/css?family=Cute+Font');
  font-family: 'Cute Font', cursive;
  color: ${light};
  letter-spacing: 2px;
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px ${light};
  outline: none;
  padding-bottom: 4px;
  margin: 0 20px 30px 0;
  width: 100%;
  font-size: 25px;
  ${media.tablet`
  width: 100%;
  `}
  ${media.desktop`
    width: 30%;
  `}
  ${media.xldesktop`
    width: 30%;
  `}
  -webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px ${marine} inset;
  -webkit-text-fill-color: ${light};
 }
 `;

export const GetButton = styled.button`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:700');
  font-family: 'Amatic SC', cursive;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 20px;
  border: 0;
  padding: 8px 20px;
  margin: 0 2px;
  border-radius: 2px;
  cursor: pointer;
  background-color: ${pink};
  color: ${marine};
  outline: none;
`;

export const WeatherStyled = styled.div`
@import url('https://fonts.googleapis.com/css?family=Cute+Font');
font-family: 'Cute Font', cursive;
letter-spacing: 2px;
position: absolute;
padding: 10%;
z-index: 2;
top: 50%;
font-size: 20px;
${media.tablet`
  font-size: 22px;
  top: 50%;
`}
${media.desktop`
  font-size: 25px;
  top: 40%;
`}
${media.xldesktop`
  font-size: 25px;
  top: 40%;
`}
`;