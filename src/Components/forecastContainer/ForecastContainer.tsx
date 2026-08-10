import { useState } from "react";
import "./ForecastContainer.modules.css";
import { DailyForecast } from "../DailyForecast/DailyForecast";
import { HourlyForecast } from "../HourlyForecast/HourlyForecast";
import type { WeatherData } from "../types/types";

type ForecastProps = {
  weather: WeatherData[];
};

export const ForecastContainer: React.FC<ForecastProps> = ({ weather }) => {
   const [active, setActive] = useState<"hourly" | "daily">("hourly");

  return (
    <div className="content">
      <div className="btns">
        <button
          onClick={() => setActive("hourly")}
          className={active === "hourly" ? "active" : ""}
          disabled={active === "hourly"}
        >
          Hourly Forecast
        </button>
        <button
          onClick={() => setActive("daily")}
          className={active === "daily" ? "active" : ""}
          disabled={active === "daily"}
        >
          Daily Forecast
        </button>
      </div>
      {active === "daily" && <DailyForecast weather={weather} />}
      {active === "hourly" && <HourlyForecast weather={weather} />}
    </div>
  );
};
