import styles from "./DailyForecast.module.css";
import { Text } from "../Text/Text";

export const DailyForecast = () => {
  return (
    <>
      <div className={styles.DailyContent}>
        <div className={styles.dailyForecast}>
          <Text variant="p">Monday</Text>
          ☀️
          <Text variant="h2">22°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">Tuesday</Text>
          🌨️
          <Text variant="h2">22°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">Wednesday</Text>
          🌧️
          <Text variant="h2">22°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">Thursday</Text>
          💭
          <Text variant="h2">22°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">Friday</Text>
          ☀️
          <Text variant="h2">22°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">saturday</Text>⛅<Text variant="h2">22°C</Text>
        </div>

        <div className={styles.dailyForecast}>
          <Text variant="p">Sunday</Text>
          ⛈️
          <Text variant="h2">22°C</Text>
        </div>
      </div>
    </>
  );
};
