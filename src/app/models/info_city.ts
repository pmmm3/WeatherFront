export interface Info_city {

  coordinates: {
    lat: number;
    lon: number;
  };
  environment: {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    weather: string;
    weather_description: string;
  };
  name: string;

}
