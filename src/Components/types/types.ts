export interface HourlyItem {
  time: number;
  icon:string;
  condition: string;
  temperature: number;
  humidity: number;
  weatherIcons: string;
  days:DailyItem[];
}

export interface WeatherData {
  time:number;
  city: string;
  temperature: number;
  windSpeed: number;
  humidity: number;
  date: string;
  days:DailyApiData[];
  condition: string;
  weatherIcons: string;
  hourlyList: HourlyItem[];
}

export interface DailyItem{
  day:string,
  icon:string;
  date:string ;
  temperature: number;
}

export interface DailyApiData{
  date: string;
   temperature: number;
   weather_code: number;
}