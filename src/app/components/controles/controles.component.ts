import { Component, OnInit } from '@angular/core';

import { AniosService } from 'src/app/services/anios.service';
import { EstacionesService } from 'src/app/services/estaciones.service';

import { anio } from 'src/app/models/anio';
import { mes } from 'src/app/models/mes';
import { estacion } from 'src/app/models/estacion';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {

//climaData: ClimaGeneral | undefined;
  anios: anio[] = [];
  meses: mes[] = [];
  estaciones: estacion[] = [];

  constructor(
    private _as:AniosService,
    private _es:EstacionesService
  ) { }

  ngOnInit(): void {

    this._es.getEstaciones().subscribe(data =>{
      this.estaciones = data;
      console.log(data);
    });

    this._as.getAnios().subscribe( data => {
      this.anios = data;
      console.log(data);
    });

    this._as.getMes().subscribe( data => {
      this.meses = data;
      console.log(data);
    })
  
  }

}
