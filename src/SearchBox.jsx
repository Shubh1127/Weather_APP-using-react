import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "./App.css";
import { useState } from "react";
export default function SearchBox({updateInfo}) {

    let link = import.meta.env.VITE_URL;
  let apikey = import.meta.env.VITE_API_KEY;

  let [City, setCity] = useState("");
  
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit=async (event)=>{
    event.preventDefault();
    console.log(City);
    setCity("")
    let newinfo=await FetchData();
    updateInfo(newinfo)

  }
  let FetchData=async()=>{
    let res=await fetch(`${link}${City}&appid=${apikey}&units=metric`);
    let json=await res.json();
    // console.log(json);
    let result={
            city:json.name,
            temp:json.main.temp,
            tempMin:json.main.temp_min,
            tempMax:json.main.temp_max,
            humidity:json.main.humidity,
            pressure:json.main.pressure,
            feelsLike:json.main.feels_like,
            weather:json.weather[0].description,
            wind:json.wind.speed,
    }   
    console.log(result)
    return result;
  }
  
  return (
    <>
      <h1>Search for the weather</h1>
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city" label="City Name" variant="outlined" value={City} onChange={handleChange} required />
        <Button variant="contained" type="submit" > SEARCH</Button>
      </form>
    </div>
          </>
  );
}
