import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

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
  visualizacion = [{id:1,nombre:'Promedio'},{id:2,nombre:'Historico'},{id:3,nombre:'Proyeccion'}];
  datos= [{id:1,nombre:'Lluvia'},{id:2,nombre:'Temperatura'}];

  //parametros para abrir la ventana de datos
  e1:string ='';
  e2:string ='';
  y1:string ='';
  y2:string ='';
  v1:string ='';
  d1:string ='';
  
  location: any ;
  
  constructor(
    private _location: Location,
    private _as:AniosService,
    private _es:EstacionesService
  ) { 
    this.location = location;
    console.log(this.location.href);
  }

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


  openNewWindow():void {
    console.log('aqui se abre la ventana con los datos adquiridos');

    if (this.e1 == '' || this.y1 == '' || this.y2 == '' || this.v1 == '' || this.d1 == '' ){
      console.log('seleccione todos los campos');
      alert('seleccione todos los campos obligatorios');
    }else{
      var pagina:string = '';
      if (this.v1 == 'Proyeccion'){
        if (this.d1 == 'Lluvia'){
          pagina = 'proyeccionLluvia.html';
        }
        if (this.d1 == 'Temperatura'){
          pagina = 'proyeccionTemperatura.html';
        }

      }else if (this.v1 == 'Historico'){
        if (this.d1 == 'Lluvia'){
          pagina = 'lluvia.html';
        }
        if (this.d1 == 'Temperatura'){
          pagina = 'temperatura.html';
        }

      }else if (this.v1 == 'Promedio'){
        if (this.d1 == 'Lluvia'){
          pagina = '';
        }
        if (this.d1 == 'Temperatura'){
          pagina = '';
        }

      }

      var url = this.location.href +  "assets/" + pagina + "?titulo=Proyecciones" +
      "&selectEstacion=" +
      this.e1 +
      "&selectEstacion2=" +
      this.e2 +
      "&selectYYYY1=" +
      this.y1 +
      "&selectYYYY2=" +
      this.y2 +
      "&selectVisualizacion=" +
      this.v1;
      console.log(url);
      var myWindow = window.open(url, "", "scrollbars=1");
  
    }

  }  

}
