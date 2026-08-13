import styles from "./DailyForecast.module.css";
import { Text } from "../Text/Text";
import type { WeatherData } from "../types/types";

type DailyForecastProps = {
  weather: WeatherData[];
  units: string;
};

export const DailyForecast: React.FC<DailyForecastProps> = ({
  weather,
  units,
}) => {
  const currentCityData = weather[0];

  if (!currentCityData || !currentCityData.hourlyList) {
    return <div>No hourly forecast available.</div>;
  }

  return (
    <div className={styles.dailyContent}>
      {currentCityData.days.slice(0, 6).map((dayItem, index) => {
        const temparature = Math.round(
          units === "°C" ? dayItem.temperature : dayItem.temperature * 1.8 + 32,
        );
        return (
          <div key={index} className={styles.dailyForecast}>
            <Text variant="p">
              {new Date(dayItem.date.toString()).toLocaleDateString([], {
                weekday: "short",
              })}
            </Text>

            <Text variant="h2">{temparature}°C</Text>
          </div>
        );
      })}
    </div>
  );
};
