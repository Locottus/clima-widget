import { Component, OnInit } from '@angular/core';
import { 
  faCloud,faCloudMoon,faCloudMoonRain,faCloudRain,
  faCloudShowersHeavy,faCloudSun,faCloudSunRain,
  faMoon,faSun,faThermometer,faWind,faEye,faTint,
  faArrowDown,
 } from '@fortawesome/free-solid-svg-icons';


//import services 
import { ClimaGeneralService } from 'src/app/services/clima-general.service';

import { ClimaGeneral } from 'src/app/models/ClimaGeneral';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
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

  date = new Date();
  latitude = 0;
  longitude = 0;

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
  constructor() { }


  getCoordinates(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(position.coords.latitude,position.coords.longitude);
        console.log(this.date);
        //https://api.openweathermap.org/data/2.5/forecast?lat=14.6341888&lon=-90.5248768&appid=98674de6a91859bcea48ba07be964379&units=metric&lang=sp
        //https://openweathermap.org/forecast5

        //https://openweathermap.org/forecast5

      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  ngOnInit(): void {
    this.getCoordinates();
  }

}
