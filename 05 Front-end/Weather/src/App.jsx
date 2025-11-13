import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [cityWeather, setCityWeather] = useState([]);
  const cities = ["Delhi", "Mumbai", "Kolkata", "Chennai", "London"];

  useEffect(() => {
    async function fetchData() {
      const apiKey = "b7c28aeda623fdf2ee2f66eef5600c5b";
      const results = [];

      for (let city of cities) {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const data = await res.json();
        results.push(data);
      }
      setCityWeather(results);
    }
    fetchData();
  },[]);
  if (cityWeather.length === 0) return <h1>Loading...</h1>;

  return (
    <div>
      {cityWeather.map((item, index) => (
        <Weather
          key={index}
          location={item.name}
          temperature={(item.main.temp - 273.15).toFixed(1)}
          condition={item.weather[0].description}
        />
      ))}
    </div>
  );
}

export default App;