export interface IForecast {
    name: string;
    weather: [
        {
            description: string;
        }
    ];
    visibility: number;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
        temp_max: number;
        temp_min: number;
        sea_level: number;
    };
    wind: {
        speed: number;
    };
}
