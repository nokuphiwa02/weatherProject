import { Text } from "../Text/Text";
import type { WeatherData } from "../types/types";
import styles from "./HourlyForecast.module.css";

type HourlyForecastProps={
  weather: WeatherData[];
}


export const HourlyForecast:React.FC<HourlyForecastProps> = ({weather}) => {
const currentCityData = weather[0];

  if (!currentCityData || !currentCityData.hourlyList) {
    return <div>No hourly forecast available.</div>;
  }

  return (
    <div className={styles.hourlyContent}>
      {/* Loop through each element in your hourly database array */}
      {currentCityData.hourlyList.slice(0, 6).map((hourItem, index) => (
        <div key={index} className={styles.hourlyForecast}>
          {/* Displays dynamic formatted hours like "21:00", "22:00" */}
          <Text variant="p">{hourItem.time}</Text> 
          <span>{hourItem.condition}</span>
          {/* Displays varying temperatures for that specific hour */}
          <Text variant="h2">{hourItem.temperature}°C</Text>
        </div>
      ))}
    </div>
  );
};