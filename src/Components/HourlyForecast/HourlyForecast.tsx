import { Text } from "../Text/Text";
import type { WeatherData } from "../types/types";
import styles from "./HourlyForecast.module.css";

type HourlyForecastProps = {
  weather: WeatherData[];
};

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ weather }) => {
  const currentCityData = weather[0];

  if (!currentCityData || !currentCityData.hourlyList) {
    return <div>No hourly forecast available.</div>;
  }

  return (
    <div className={styles.hourlyContent}>
      {currentCityData.hourlyList.slice(0, 6).map((hourItem, index) => (
        <div key={index} className={styles.hourlyForecast}>
          <Text variant="p">
            {new Date(hourItem.time.toString()).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              // hour12: true,
            })}
          </Text>

          <Text variant="h2">{hourItem.temperature}°C</Text>
        </div>
      ))}
    </div>
  );
};