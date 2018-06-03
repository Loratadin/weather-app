import React from 'react';

class Weather extends React.Component{
 render() {
  return(
   <div>
    {/* conditional operator: if the first is true the second will be shown (true)*/}
     {this.props.city && this.props.country &&  <p>Location: { this.props.city }, { this.props.country }</p>} 
     {this.props.temperature && <p>Temperature: { this.props.temperature }</p>}
     {this.props.humidity && <p>Humidity: { this.props.humidity }</p>}
     {this.props.description && <p>Conditions: { this.props.description }</p>}
   </div>
  );
 }
};

export default Weather;