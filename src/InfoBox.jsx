import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './index.css'
import Typography from '@mui/material/Typography';
// import {result} from './SearchBox'
export default function InfoBox(){
    let result={
        city:"Delhi",
        temp:25.5,
        tempMin:18,
        tempMax:30,
        humidity:70,
        pressure:1,
        feelsLike:26,
        weather:"haze",
        wind:1.5,
}   
    return(
        <div className="InfoBox">
            <h1>
                WeatherInfo<br></br>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature ={result.temp}&deg;C</p>
         <p>humidity ={result.humidity}%</p>
         <p>pressure ={result.pressure}ATM</p>
         <p>feels_like ={result.feelsLike}&deg;C</p>
         <p>max Temp ={result.tempMax}&deg;C</p>
         <p>min Temp ={result.tempMin}&deg;C</p>
         <p>Wind Speed ={result.wind}km/h</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </h1>
        </div>
    )
}