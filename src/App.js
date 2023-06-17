import "./App.css";

const api = {
  key: "2d5ee761bc6b8cc8e3a4e2d96188c7eb",
  base: "https://api.openweathermap.org/data/2,5/",
};

function App () {
  return (
    <div className="App">
    <header className="App-header">
   
    <h1>Weather</h1>
   
    <input type="text" placeholder="Search.." />

    <p>Dublin</p>

    <p>32 C</p>

    <p>Misty</p>

    </header>
    </div>
  );
}


export default App;
