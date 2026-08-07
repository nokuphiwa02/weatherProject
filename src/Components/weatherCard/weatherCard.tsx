import styles from "./weatherCard.module.css";
import type { WeatherData } from "../types/types";


type WeatherProps = {
  weather: WeatherData |null;
}

const WeatherCard: React.FC<WeatherProps> = ({weather}) => {
  return (
    <div className={styles.weatherCardContent}>
      <div className={styles.weatherCard}>
        <div className={styles.weatherCardHeader}>
          <h2 id="location"> {weather?.city} </h2>
          <p className={styles.p}>{weather?.date}</p>

        </div>
        <div className={styles.weatherInfo}>
          <p id="temp">{weather?.temperature}°C</p>
          <p id="condition">{weather?.windSpeed}</p>
          <p id="humidity">{weather?.humidity}%</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
