
import { Text } from "../Text/Text";
import styles from "./HourlyForecast.module.css";
// import sun from "../../assets/sun.png";
// import snow from '../../assets/snow.png';
// import rain from '../../assets/rain.png';
// import cloud from '../../assets/cloud.png';
// import hot from '../../assets/cloud.png';
// import cloudysun from '../../assets/cloudy sun.png';
// import cloudyrain from "../../assets/cloudy rain.png";

export const HourlyForecast = () => {
  return (
    <>

    <div className={styles.hourlyContent}>
       <button className={styles.hrly}>Hourly Forecast</button>
       <button  className={styles.daily}>Daily Forecast</button>

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
