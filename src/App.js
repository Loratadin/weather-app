import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "0458137df9115519bc98d8e2925ed1a3";

class App extends React.Component {
  getWeather = async (e) => {
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
   const data = await api_call.json(); //convert api call to json format and asign it to const data
  }  
  render() {
   return (
    <div>
     <Titles/>
     <Form/>
     <Weather/>
    </div>
   );
  }
};

export default App;