import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./index.css";
import Typography from "@mui/material/Typography";
// import {result} from './SearchBox'

export default function InfoBox({result,image}) {
  
  return (
    <div className="InfoBox">
      <h1></h1>
      <br></br>
      <div className=" h-[50vh] w-[70vw] flex">
        <img src={image}/>
              <span className="one ml-[20px] w-[20vw] h-[42vh] flex flex-col items-center justify-center font-bold text-lg text-black bg-white-opacity-30 p-[20px] rounded-xl">
              <p>Temperature ={result.temp}&deg;C</p>
              <p>humidity ={result.humidity}%</p>
              <p>pressure ={result.pressure}ATM</p>
              <p>feels_like ={result.feelsLike}&deg;C</p>
              </span>
              <span className="one ml-[20px] w-[20vw] h-[42vh] flex flex-col items-center justify-center font-bold text-lg text-black bg-white-opacity-30 p-[20px] rounded-xl">
              <p>max Temp ={result.tempMax}&deg;C</p>
              <p>min Temp ={result.tempMin}&deg;C</p>
              <p>Wind Speed ={result.wind}km/h</p>
              <p>WeatherInfo-{result.weather}</p>
              </span>
           
      </div>
    </div>
  );
}
