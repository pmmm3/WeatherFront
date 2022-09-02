export interface Historical {
  city:
    {
      coordinates:
        {
          lat: number;
          lon: number;
        },
      name: string;
    },
  historical_weather:
    [
      {
        environment:
          {
            humidity: number;
            pressure: number;
            temp: number;
            temp_max: number;
            temp_min: number;
            weather: string;
            weather_description: string;
          },
      }
    ]
}
