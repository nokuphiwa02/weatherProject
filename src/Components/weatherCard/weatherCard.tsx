import styles from "./weatherCard.module.css";
// import sun from "../../assets/sun.png";

export type weatherCardProps = {
  city: string;
  temperature: number;
  windSpeed: number;
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
        <div className={styles.weatherCardHeader}>
          <h2 id="location">Durban {city} </h2>
          <p className={styles.p}>Tuesday, 04 August</p>
          <h2 className={styles.time}>12 : 00</h2>
        </div>
        <div className={styles.weatherInfo}>
          <p id="temp">temperature : 24 {temperature}°C</p>
          <p id="condition">windspeed : 5km/h {windSpeed}</p>
          <p id="humidity">Humidity: 58 {humidity}%</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
