import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey='5b5064bcaa67534d51c1a6ce59a596e8';
  URI:string=`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  constructor(private http:HttpClient) {
  }
  getWeather(cityName: string, countryCode: string) {
   
    return this.http.get(`${this.URI} ${cityName} ,${countryCode}`);
   }
  }
