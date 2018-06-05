import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import { Wrapper, Container, TitleStyled, FormStyled, WeatherStyled, FormWeatherContainer } from './AppStyle';

const API_KEY = "0458137df9115519bc98d8e2925ed1a3";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);//variable contains the function that makes the call to this url
   const data = await api_call.json(); //convert api call to json format and asign it to const data
   if (city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values."
    });
  }
}
  render() {
   return (
    <Wrapper>
      <Container>
        <TitleStyled><Titles/></TitleStyled>
        <FormWeatherContainer>
          <FormStyled><Form getWeather={this.getWeather}/></FormStyled>
          <WeatherStyled>
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </WeatherStyled>
        </FormWeatherContainer>
      </Container>
    </Wrapper>
   );
  }
};

export default App;