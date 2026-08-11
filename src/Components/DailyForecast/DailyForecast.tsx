import styles from "./DailyForecast.module.css";
import { Text } from "../Text/Text";
import type { WeatherData } from "../types/types";

type DailyForecastProps = {
  weather: WeatherData[];
};

export const DailyForecast: React.FC<DailyForecastProps> = ({ weather }) => {
  const currentCityData = weather[0];

  

  if (!currentCityData || !currentCityData.hourlyList) {
    return <div>No hourly forecast available.</div>;
  }

  return (
    <div className={styles.dailyContent}>
      {currentCityData.hourlyList.slice(0, 6).map((dayItem, index) => {
        const forecastDate =
          ("date" in dayItem ? dayItem.date : undefined) ??
          ("time" in dayItem ? dayItem.time : undefined);

        return (
          <div key={index} className={styles.dailyForecast}>
            <Text variant="p">
              {/* {forecastDate
                ? new Date(forecastDate).toLocaleDateString([], {
                    weekday: "long",
                  })
                : "Unknown date"} */}
            </Text>

            <Text variant="h2">{dayItem.temperature}°C</Text>
          </div>
        );
      })}
    </div>
  );
};