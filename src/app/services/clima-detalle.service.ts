import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {ClimaForecast} from '../models/ClimaForecast'

//https://api.openweathermap.org/data/2.5/forecast?lat=14.6341888&lon=-90.5248768&appid=98674de6a91859bcea48ba07be964379&units=metric&lang=sp

@Injectable({
  providedIn: 'root'
})
export class ClimaDetalleService {


  constructor(private http: HttpClient) { }

  getClima(lat:number,lon:number):Observable<ClimaForecast>{
    //let url = 'https://api.openweathermap.org/data/2.5/weather?APPID=98674de6a91859bcea48ba07be964379&lat=' + lat.toString() +'&lon='+ lon.toString() +'&lang=sp&units=metric'
    let url =  '/assets/clima-forecast.json';
    //console.log(url);
    return this.http.get<ClimaForecast>(url);
    
  }

}
