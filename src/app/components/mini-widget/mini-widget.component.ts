import { Component, OnInit } from '@angular/core';
import { 
  faCloud,faCloudMoon,faCloudMoonRain,faCloudRain,
  faCloudShowersHeavy,faCloudSun,faCloudSunRain,
  faMoon,faSun,faThermometer,faWind,faEye,faTint,
  faArrowDown,faThermometerFull,faThermometerEmpty
 } from '@fortawesome/free-solid-svg-icons';

//import services 
import { ClimaGeneralService } from 'src/app/services/clima-general.service';

import { ClimaGeneral } from 'src/app/models/ClimaGeneral';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

//parms in url
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common'



@Component({
  selector: 'app-mini-widget',
  templateUrl: './mini-widget.component.html',
  styleUrls: ['./mini-widget.component.css']
})
export class MiniWidgetComponent implements OnInit {
  fathermometerfull=faThermometerFull;
  fathermometerempty=faThermometerEmpty;
  faarrowdown = faArrowDown;
  fatint = faTint;
  facloud = faCloud;
  facloudmoon = faCloudMoon;
  facloudmoonrain = faCloudMoonRain;
  facloudrain = faCloudRain;
  facloudshowersheavy = faCloudShowersHeavy;
  facloudsun = faCloudSun;
  facloudsunrain = faCloudSunRain;
  famoon = faMoon;
  fasun = faSun;
  fathermometer = faThermometer;
  fawind =faWind;
  faeye = faEye;

  lat = 0;
  lon = 0;

  nubosidad = 0;
  visibilidad = 0;
  humedad = 0;
  presion = 0;
  altura = 0;
  temperatura = 0;
  max = 0;
  min = 0;
  feels = 0;
  vientoGrados = 0;
  vientoGust = 0;
  vientoVelocidad = 0;

  climaDescripcion = '';
  ciudad = '';

  fecha = '';
  hora = 0;
  dia = false;

  seco = 0;
  lluvia = 1;
  nuboso  = 2;
  climaIcono = 0;

  climaData: ClimaGeneral | undefined;
  
  constructor(private cg:ClimaGeneralService,
    private route: ActivatedRoute,
    private location: Location) { }

  

  ngOnInit(): void {
    //get url parms
    //let y = this.route.snapshot.paramMap.get('latitude');
    //let x = this.route.snapshot.paramMap.get('longitude');
    this.route.queryParams.subscribe(params => {
      this.lat = params['lat'];
      this.lon = params['lon'];
      
      if ((typeof this.lat == 'undefined') || (typeof this.lon == 'undefined')){
       this.getCoordinates();
      }

    });

    
    this.cg.getClima(this.lat,this.lon).subscribe(data => {
      this.climaData = data;
      console.log(data);
      this.temperatura = this.climaData.main.temp;
      this.max = this.climaData.main.temp_max;
      this.min = this.climaData.main.temp_min;
      this.humedad = this.climaData.main.humidity;
      this.climaDescripcion = this.climaData.weather[0].description;
      this.ciudad = this.climaData.name;
      var d = new Date();
      this.fecha = d.toString();
      this.hora = d.getHours();
      
      //default dia despejado
      if (this.climaDescripcion.indexOf( "nub" )>-1) //nuboso o parecido
        this.climaIcono = this.nuboso;
      if (this.climaDescripcion.indexOf( "lluvi" )>-1)//lluvioso o parecido
        this.climaIcono = this.lluvia;


      if (this.hora > 5 && this.hora < 19){
        this.dia = true;
      }
        
      else{
        this.dia = false;
      }
        
    });
  }

  getCoordinates(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        console.log(position.coords.latitude,position.coords.longitude);
        
        //https://api.openweathermap.org/data/2.5/forecast?lat=14.6341888&lon=-90.5248768&appid=98674de6a91859bcea48ba07be964379&units=metric&lang=sp
        //https://openweathermap.org/forecast5

        //https://openweathermap.org/forecast5

      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }



}
