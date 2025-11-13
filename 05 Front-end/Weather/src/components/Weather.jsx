import React from 'react';
import './weather.css';

function Weather({ location, temperature, condition }) {
  return (
    <div id="card">
      <h1>{location}</h1>
      <h3>{temperature}°C</h3>
      <p>{condition}</p>
    </div>
  );
}

export default Weather;