export interface ClimaGeneral{
    coord :{
        lon: Number,
        lat: Number
    },
    weather:[{
        id:Number,
        main: Text,
        description: Text,
        icon: Text
    }],
    base: Text,
    main:{
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number
    },
    visibility: Number,
    wind:{
        speed: Number,
        deg: Number
    },
    clouds:{
        all: Number
    },
    dt: Number,
    sys: {
        type: Number,
        id: Number,
        message: Number,
        country: Text,
        sunrise: Number,
        sunset: Number
    },
    timezone: Number,
    id: Number,
    name: Text,
    cod: Number
}