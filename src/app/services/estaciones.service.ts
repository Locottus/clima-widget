import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//modelo
import { estacion } from '../models/estacion';


@Injectable({
  providedIn: 'root'
})
export class EstacionesService {

  estacion : estacion | undefined ;


  constructor(private http: HttpClient) { }

  getEstaciones():Observable<estacion>{
    let url = 'https://arcgis-web.url.edu.gt/incyt/api/clima/getestaciones'
    //let url =  '/assets/clima-general.json';
    console.log(url);
    return this.http.get<estacion>(url);
    
  }

}
