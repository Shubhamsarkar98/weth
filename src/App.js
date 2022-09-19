import React, { useState } from "react";
import axios from "axios";
import ShowTemp from "./ShowTemp";

function App() {
  const [city, setcity] = useState("");
  const [data, setdata] = useState({
    description: "",
    temp: "",
    temp_max: "",
    humidity: "",
    sunrise: "",
    sunset: "",
    country: "",
  });
  const handleapi = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6dbcf6f1a79ee3ee10411e147b6808d2`
      )
      .then((res) => {
        console.log(res.data)
        setdata({
          description:res.data.weather[0].description,
          temp: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          humidity: res.data.main.humidity,
          sunrise: res.data.sys.sunrise,
          sunset:res.data.sys.sunset ,
          country:res.data.sys.country ,
        });
      });
  };
  return (
    <>
      <div className="container text-center my-2">
        <h1>Weather app using React js</h1>
        <input
          type="text"
          className="form-control"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" onClick={handleapi}>
          get data
        </button>
        <ShowTemp text={data}/>
      </div>
    </>
  );
}

export default App;
