import { Text } from "../Text/Text";
import styles from "./HourlyForecast.module.css";


export const HourlyForecast = () => {
  return (
    <>

    <div className={styles.hourlyContent}>
      

      <div className={styles.hourlyForecast}>
        <Text variant="p">6:00 AM</Text>
        ☀️
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">7:00 AM</Text>
        🌨️
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">8:00 AM</Text>
       🌧️
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">9:00 AM</Text>
        💭
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">10:00 AM</Text>
       ☀️
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">11:00 AM</Text>
       ⛅
        <Text variant="h2">22°C</Text>
      </div>

      <div className={styles.hourlyForecast}>
        <Text variant="p">12:00 PM</Text>
       ⛈️
        <Text variant="h2">22°C</Text>
      </div>
    </div>
    </>
  );
};
