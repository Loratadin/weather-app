import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url('${require('./assets/bg.jpg')}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700');
font-family: 'Amatic SC', cursive;
`;