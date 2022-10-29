import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0e34fc5d8a80478667f6e03f5872cbb4
  `;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      await fetch(url)
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          console.log(response);
        });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onKeyPress={searchLocation}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className="bold">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p className="bold">{data.weather[0].main}</p>
            ) : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()}°F</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}°</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{data.wind.speed.toFixed()} MPH</p>
            ) : null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
