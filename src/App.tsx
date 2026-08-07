import { Route, Routes } from "react-router-dom";
import { Setting } from "./Components/pages/setting";
import { Home } from "./Components/pages/Home";
import { useState, useEffect } from "react";
import type { WeatherData } from "./Components/types/types";

export const App = () => {
  const [isDark, setIsDark] = useState(false);
  const handleChange = () => setIsDark(!isDark);

  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const city = "Durban";

  useEffect(() => {
    // const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherstack.com/current?access_key=${import.meta.env.VITE_WEATHER_API_KEY}&query=Durban`;

    const startWeatherFetch = () => {
      setLoading(true);
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("City not found or API error");
          return res.json();
        })
        .then((data) => {
          if (data.success === false) throw new Error(data.error.info);

          const formattedData: WeatherData = {
            city: data.location.name,
            temperature: Math.round(data.current.temperature),
            windSpeed: data.current.wind_speed,
            humidity: data.current.humidity,
            date: data.location.localtime,
          };

          setWeather([formattedData]);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    };

    startWeatherFetch();
  }, [city]);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Routes>
        <Route
          path="/settings"
          element={<Setting isDark={isDark} handleChange={handleChange} />}
        />
        <Route
          path="/"
          element={
            <Home
              weather={weather}
              isDark={isDark}
              handleChange={handleChange}
              // weather={[
              //   {
              //     city: "Durban",
              //     temperature: 24,
              //     windSpeed: 15,
              //     humidity: 65,
              //   },
              // ]}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
