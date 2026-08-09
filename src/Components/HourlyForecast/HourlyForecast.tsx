import { Text } from "../Text/Text";
import type { WeatherData } from "../types/types";
import styles from "./HourlyForecast.module.css";

type HourlyForecastProps={
  weather: WeatherData[];
}


export const HourlyForecast:React.FC<HourlyForecastProps> = ({weather}) => {
  return (
    <>

    <div className={styles.hourlyContent}>
      

      <div className={styles.hourlyForecast}>
        <Text variant="p">{weather[0].time}</Text>
        ☀️
        <Text variant="h2">{weather[0].temperature}°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">{weather[0].time}</Text>
        🌨️
        <Text variant="h2">{weather[0].temperature}°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">{weather[0].time}</Text>
       🌧️
        <Text variant="h2">{weather[0].temperature}°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">{weather[0].time}</Text>
        💭
        <Text variant="h2">{weather[0].temperature}°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">{weather[0].time}</Text>
       ☀️
        <Text variant="h2">{weather[0].temperature}°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">{weather[0].time}</Text>
       ⛅
        <Text variant="h2">{weather[0].temperature}°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">{weather[0].time}</Text>
       ⛈️
        <Text variant="h2">{weather[0].temperature}°C</Text>
      </div>
    </div>
    </>
  );
};
