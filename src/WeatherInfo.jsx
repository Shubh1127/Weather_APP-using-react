import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherInfo(){
    let [WeatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        temp: 25.5,
        tempMin: 18,
        tempMax: 30,
        humidity: 70,
        pressure: 1,
        feelsLike: 26,
        weather: "haze",
        wind: 1.5,
      })
      let updateInfo=(newinfo)=>{
            setWeatherInfo(newinfo);
      }
    return(
        <div>
            <h2>Weather app by -shubham</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox result={WeatherInfo}/>
        </div>
    )
}