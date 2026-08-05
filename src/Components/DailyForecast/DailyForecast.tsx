import React from "react";
import styles from "./DailyForecast.module.css";
import { Text } from "../Text/Text";

export const DailyForecast = () => {
  return (
    <div className={styles.DailyContent}>
      <div className={styles.dailyForecast}>
        <Text variant="p">6:00 AM</Text>
        ☀️
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.dailyForecast}>
        <Text variant="p">7:00 AM</Text>
        🌨️
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.dailyForecast}>
        <Text variant="p">8:00 AM</Text>
        🌧️
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.dailyForecast}>
        <Text variant="p">9:00 AM</Text>
        💭
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.dailyForecast}>
        <Text variant="p">10:00 AM</Text>
        ☀️
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.dailyForecast}>
        <Text variant="p">11:00 AM</Text>⛅<Text variant="h2">22°C</Text>
      </div>

      <div className={styles.dailyForecast}>
        <Text variant="p">12:00 PM</Text>
        ⛈️
        <Text variant="h2">22°C</Text>
      </div>
    </div>
  );
};
