import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ClimaDetalleService {

  private _url = 'https://arcgis-web.url.edu.gt/incyt/api/clima/getestaciones';

  constructor(private http: HttpClient) { }


}
