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
  <h2 id="location">{weather?.city}</h2>

  <p className={styles.p}>
    {weather?.date &&
      new Date(weather.date).toLocaleDateString("en-ZA", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
  </p>

  <p className={styles.p}>
    {weather?.date &&
      new Date(weather.date).toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
      })}
  </p>
</div>
        <div className={styles.weatherInfo}>

  <div>
    <p>Temperature</p>
    <h2>{weather?.temperature}°C</h2>
  </div>

  <div>
    <p>Humidity</p>
    <h2>{weather?.humidity}%</h2>
  </div>

  <div>
    <p>Wind Speed</p>
    <h2>{weather?.windSpeed} km/h</h2>
  </div>

</div>
      </div>
    </div>
  );
};
export default WeatherCard;
