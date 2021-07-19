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
import { ClimaForecast } from 'src/app/models/ClimaForecast';

//parms in url
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common'
import { ClimaDetalleService } from 'src/app/services/clima-detalle.service';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {


  public pieChart: GoogleChartInterface = {
    //chartType: 'PieChart',
    chartType: 'LineChart',
    dataTable: [
      ["Month", "Tokyo", "New York","Berlin", "Paris"],
      ["Jan",  7.0, -0.2, -0.9, 3.9],
      ["Feb",  6.9, 0.8, 0.6, 4.2],
      ["Mar",  9.5,  5.7, 3.5, 5.7],
      ["Apr",  14.5, 11.3, 8.4, 8.5],
      ["May",  18.2, 17.0, 13.5, 11.9],
      ["Jun",  21.5, 22.0, 17.0, 15.2],
      ["Jul",  25.2, 24.8, 18.6, 17.0],
      ["Aug",  26.5, 24.1, 17.9, 16.6],
      ["Sep",  23.3, 20.1, 14.3, 14.2],
      ["Oct",  18.3, 14.1, 9.0, 10.3],
      ["Nov",  13.9,  8.6, 3.9, 6.6],
      ["Dec",  9.6,  2.5,  1.0, 4.8]
    ],
    //firstRowIsData: true,
    options: {'title': 'Proyeccion para los proximos 5 dias'},
  };




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
  climaDataForecast: ClimaForecast | undefined;
  
  constructor(private cg:ClimaGeneralService,
    private cf:ClimaDetalleService,
    private route: ActivatedRoute,
    private location: Location) { }


  getCoordinates(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        console.log(position.coords.latitude,position.coords.longitude);
        console.log(this.fecha);
        //https://api.openweathermap.org/data/2.5/forecast?lat=14.6341888&lon=-90.5248768&appid=98674de6a91859bcea48ba07be964379&units=metric&lang=sp
        //https://openweathermap.org/forecast5

        //https://openweathermap.org/forecast5

      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

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

    this.cf.getClima(this.lat,this.lon).subscribe(data => {
        this.climaDataForecast = data;
        console.log(this.climaDataForecast.list);
    });
    
    this.cg.getClima(this.lat,this.lon).subscribe(data => {
      this.climaData = data;
      
      //console.log(data);
      //general

      this.temperatura = this.climaData.main.temp;
      this.max = this.climaData.main.temp_max;
      this.min = this.climaData.main.temp_min;
      this.humedad = this.climaData.main.humidity;
      this.climaDescripcion = this.climaData.weather[0].description;
      this.ciudad = this.climaData.name;
      this.nubosidad = this.climaData.clouds.all;
      this.visibilidad = this.climaData.visibility;
      this.presion = this.climaData.main.pressure;
      this.altura = this.climaData.main.sea_level;
      this.feels = this.climaData.main.feels_like;
      var d = new Date();
      this.fecha = d.toString();
      this.hora = d.getHours();

            
      //viento
      this.vientoGrados = this.climaData.wind.deg;
      this.vientoGust = this.climaData.wind.gust;
      this.vientoVelocidad = this.climaData.wind.speed;

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

}
