import { useState } from "react";
import "./ForecastContainer.modules.css";

import { DailyForecast } from "../DailyForecast/DailyForecast";
import { HourlyForecast } from "../HourlyForecast/HourlyForecast";

export const ForecastContainer = () => {
  const [active, setActive] = useState("hourly");

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
      {active === "daily" && <DailyForecast />}
      {active === "hourly" && <HourlyForecast />}
    </div>
  );
};
