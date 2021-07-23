import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { anio } from '../models/anio';
import { mes } from '../models/mes';

@Injectable({
  providedIn: 'root'
})
export class AniosService {

  anio : anio | undefined ;
  mes : mes | undefined ;

  constructor(private http: HttpClient) { }

  getAnios():Observable<anio>{
    let url = 'https://arcgis-web.url.edu.gt/incyt/api/clima/getanios'
    //let url =  '/assets/clima-general.json';
    console.log(url);
    return this.http.get<anio>(url);
    
  }

  getMes():Observable<mes>{
    let url = 'https://arcgis-web.url.edu.gt/incyt/api/clima/getmeses'
    //let url =  '/assets/clima-general.json';
    console.log(url);
    return this.http.get<mes>(url);
    
  }

}
