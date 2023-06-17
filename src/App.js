import "./App.css";
import { useState } from "react";

const api = {
  key: "2d5ee761bc6b8cc8e3a4e2d96188c7eb",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App () {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });
  };

  return (
    <div className="App">
    <header className="App-header">
   
    <h1>Weather</h1>

    <div>
    <input type="text" placeholder="Search.." 
    
      onChange={(e) => setSearch(e.target.value)}
    />

    <button onClick={searchPressed}>Search</button>
    </div>

    <p>{weather.name}</p>

    <p>{weather.main.temp}°C</p>

    <p>Misty</p>

    </header>
    </div>
  );
}


export default App;
