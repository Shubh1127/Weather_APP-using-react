import { useState } from "react"
import './App.css'
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
        weather: "clear",
        wind: 1.5,
      })
      let [Image,setImage]=useState("/clear.png");
      const getWeatherImage = (weather) => {
          const weatherImages = {
            haze : "/haze.png",
            clear: "/clear.png",
            rainy: "/rain.png",
            clouds : "/clouds.png",
            mist:"/mist.png",
            overcast:"/clouds.png",
            // Add more mappings as needed
          };
          if (weather.includes("cloud")) {
            return weatherImages["clouds"];  // Map any "cloud" related weather to clouds image
          } else if (weather.includes("rain")) {
            return weatherImages["rainy"];    // Map any "rain" related weather to rainy image
          } else if (weather.includes("mist")) {
            return weatherImages["mist"];     // Mist mapping
          }
      
          return weatherImages[weather] || "/clear.png"; // Default image if no match
        };
      let updateInfo=(newinfo)=>{
            setWeatherInfo(newinfo);
            setImage(getWeatherImage(newinfo.weather))
      }
    return(
        <>
        {/* <h2>Weather app by -shubham</h2> */}
        <div className="a flex items-center flex-col h-[80vh]">
            <SearchBox updateInfo={updateInfo} className="search"/>
            
            <InfoBox result={WeatherInfo} image={Image}/>
        </div>
        </>
    )
}