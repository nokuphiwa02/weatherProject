import { Text } from "../Text/Text";
import type { WeatherData } from "../types/types";
import styles from "./HourlyForecast.module.css";

type HourlyForecastProps = {
  weather: WeatherData[];
  units: string;
};

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ weather, units }) => {
  const currentCityData = Array.isArray(weather) ? weather[0] : weather;

  if (!currentCityData || !currentCityData.hourlyList) {
    return <div>No hourly forecast available.</div>;
  }

  return (
    <div className={styles.hourlyContent}>
      {currentCityData.hourlyList.slice(0, 6).map((hourItem, index) => {

        const temperature = units === "°C" ? hourItem.temperature : hourItem.temperature * 1.8 + 32;
        
        return (
          <div key={index} className={styles.hourlyForecast}>
            <Text variant="p">
              {new Date(hourItem.time.toString()).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
            
            <Text variant="h2">{temperature}°C</Text>
          </div>
        );
      })}
    </div>
  );
};
