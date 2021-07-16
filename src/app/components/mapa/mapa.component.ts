import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  title = 'Como usar el Componente Google Maps de Angular 9'; 
  // Configuración de Google Maps 
  center = {lat: 14.5555, lng: -90.1555};
  zoom = 7;
  display?: google.maps.LatLngLiteral;
  constructor() { }

  ngOnInit(): void {
  }

}
