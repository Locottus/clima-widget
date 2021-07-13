import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
//MODEL
import { ClimaGeneral } from '../models/ClimaGeneral';


@Injectable({
  providedIn: 'root'
})

export class ClimaGeneralService {

  //private _url = 'https://arcgis-web.url.edu.gt/incyt/api/clima/getestaciones';

/*var url = 'https://api.openweathermap.org/data/2.5/weather?APPID=98674de6a91859bcea48ba07be964379&lat=' 
      + this.y +'&lon='+this.x +'&lang=sp&units=metric';
 */
  //private _url = '/assets/clima-general.json';
  
  clima : ClimaGeneral | undefined ;
  constructor(private http: HttpClient) { }

  getClima(lat:number,lon:number):Observable<ClimaGeneral>{
    let url = 'https://api.openweathermap.org/data/2.5/weather?APPID=98674de6a91859bcea48ba07be964379&lat=' + lat.toString() +'&lon='+ lon.toString() +'&lang=sp&units=metric'
    console.log(url);
    return this.http.get<ClimaGeneral>(url);
    
  }

}
