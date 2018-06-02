import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "0458137df9115519bc98d8e2925ed1a3";

class App extends React.Component {
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