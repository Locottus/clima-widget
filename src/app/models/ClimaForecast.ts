export interface ClimaForecast{
    cod: number,
    message: string,
    cnt: number,
    list:[
        {
            dt:number,
            main:{
                temp:number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather:[
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds:{
                all: number
            },
            wind:{
                speed: number,
                deg: number,
                gus: number
            },
            visibility: number,
            pop: number,
            rain: {
                h3: number 
            },
            sys:{
                pod: string
            },
            dt_string: string
        }       
    ]
}