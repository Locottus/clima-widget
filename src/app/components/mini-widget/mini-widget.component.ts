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

  climaDescripcion = 'parcialmente nublado';

  //climaData: ClimaGeneral[] = [];
  climaData: ClimaGeneral[] = [];
  
  constructor(private _cg:ClimaGeneralService) { }

  ngOnInit(): void {
    this._cg.getClima().subscribe(data => {
      this.climaData = data;
      console.log(this.climaData);
      //this.temperatura = this.climaData.main.temp
    });
    
  }

}
