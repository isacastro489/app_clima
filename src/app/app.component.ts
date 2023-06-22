import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weather:any;
  constructor(private weatherServices: WeatherService){

  }
  ngOnInit(): void{

  }
  getWeather(cityName:string, countryCode:string){
    this.weatherServices.getWeather(cityName, countryCode)
    .subscribe(
      resp=>{
        console.log(resp)
        this.weather=resp}
        ,
        err=> console.log(err)
    )
  }
  submitLocation(cityName:HTMLInputElement, countryCode:HTMLInputElement){
    if(cityName.value && countryCode.value){
      this.getWeather(cityName.value, countryCode.value)

      cityName.value='';
      countryCode.value='';}
      else{
        alert ('Ingresó los datos correctamente')
      }
    cityName.focus()
    return false

    }
}

