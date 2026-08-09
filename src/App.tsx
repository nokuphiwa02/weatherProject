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
    // const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=pietermaritzburg`;
     const latitude =-29.8587;
     const longitude =31.0218;

     const url =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}` +
                `&longitude=${longitude}` +
                `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code` +
                `&timezone=auto`;

                const getWeatherCondition = (code: number): string => {
             if (code === 0) return "Clear sky";
             if (code === 1 || code === 2 || code === 3) return "Cloudy";
             if (code === 45 || code === 48) return "Foggy";
             if (code >= 51 && code <= 57) return "Drizzle";
             if (code >= 61 && code <= 67) return "Rainy";
             if (code >= 71 && code <= 77) return "Snowy";
             if (code >= 80 && code <= 82) return "Rain showers";
             if (code >= 85 && code <= 86) return "Snow showers";
             if (code >= 95 && code <= 99) return "Thunderstorm";

  return "Unknown";
};

    const startWeatherFetch = () => {
      setLoading(true);
      fetch(url)
        .then((res) => {
          console.log("Response:", res.status)

          if (!res.ok) throw new Error(`API Error: ${res.status}`);
          return res.json();
        })
        .then((data) => {
            console.log("API Data :", data);
        //   if (data.success === false) throw new Error(data.error.info);

          const formattedData: WeatherData = {
            city: city,
            temperature: Math.round(data.current.temperature_2m),
            windSpeed: data.current.wind_speed_10m,
            humidity: data.current.relative_humidity_2m,
            date: data.current.time,
            time: data.current.time,
            weatherIcons: getWeatherCondition(data.current.weather_code),
          };

          setWeather([formattedData]);
          setLoading(false);
        })
        .catch((error) => {
         console.error("Fetch error:",error)
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
