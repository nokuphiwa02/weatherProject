import styles from "./DailyForecast.module.css";
import { Text } from "../Text/Text";
import type { WeatherData } from "../types/types";

type DailyForecastProps= {
  weather:WeatherData[];
}

export const DailyForecast:React.FC<DailyForecastProps> = ({weather}) => {
  return (
    <>
      <div className={styles.DailyContent}>
        <div className={styles.dailyForecast}>
          <Text variant="p">{weather[0].date}</Text>
          ☀️
          <Text variant="h2">{weather[0].temperature}°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">{weather[0].date}</Text>
          🌨️
          <Text variant="h2">{weather[0].temperature}°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">{weather[0].date}</Text>
          🌧️
          <Text variant="h2">{weather[0].temperature}°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">{weather[0].date}</Text>
          💭
          <Text variant="h2">{weather[0].temperature}°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">{weather[0].date}</Text>
          ☀️
          <Text variant="h2">{weather[0].temperature}°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">{weather[0].date}</Text>
          ⛅<Text variant="h2">{weather[0].temperature}°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">{weather[0].date}</Text>
          ⛈️
          <Text variant="h2">{weather[0].temperature}°C</Text>
        </div>
      </div>
    </>
  );
};
