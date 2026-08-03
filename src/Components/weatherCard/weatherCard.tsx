import styles from "./weatherCard.module.css";

export type weatherCardProps = {
  city: string;
  temperature: number;
  windSpeed: string;
  humidity: number;
};

const WeatherCard = ({
  city,
  temperature,
  windSpeed,
  humidity,
}: weatherCardProps) => {
  return (
    <div className={styles.weatherCardContent}>
      <div className={styles.weatherCard}>
        <h2 id="location">{city}</h2>
        <div className={styles.weatherInfo}>
          <p id="temp">{temperature}°C</p>
          <p id="condition">{windSpeed}</p>
          <p id="humidity">Humidity: {humidity} </p>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
