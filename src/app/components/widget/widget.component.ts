import { Component, OnInit } from '@angular/core';
import { 
  faCloud,faCloudMoon,faCloudMoonRain,faCloudRain,
  faCloudShowersHeavy,faCloudSun,faCloudSunRain,
  faMoon,faSun,faThermometer,faWind,faEye,faTint,
  faArrowDown,
 } from '@fortawesome/free-solid-svg-icons';




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


  constructor() { }


  getCoordinates(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(position.coords.latitude,position.coords.longitude);
        console.log(this.date);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  ngOnInit(): void {
    this.getCoordinates();
  }

}
