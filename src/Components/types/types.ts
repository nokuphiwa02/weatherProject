export interface HourlyItem {
  time: number;
  condition: string;
  temperature: number;
  humidity: number;
  weatherIcons: string;
}

export interface WeatherData {
  time:number;
  city: string;
  temperature: number;
  windSpeed: number;
  humidity: number;
  date: number;
  condition: string;
  weatherIcons: string;
  hourlyList: HourlyItem[];
}