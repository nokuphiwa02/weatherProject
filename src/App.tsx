import { Route, Routes } from "react-router-dom";
import { Setting } from "./Components/pages/setting";
import { Home } from "./Components/pages/Home";
import { useState, useEffect } from "react";
import type { WeatherData } from "./Components/types/types";

// Simple coordinate database for local coordinate mapping
const cityCoordinates: { [key: string]: { lat: number; lon: number } } = {
  durban: { lat: -29.8587, lon: 31.0218 },
  pietermaritzburg: { lat: -29.6006, lon: 30.3794 },
  johannesburg: { lat: -26.2041, lon: 28.0473 },
  cape_town: { lat: -33.9249, lon: 18.4241 },
};


export const App = () => {
  const [isDark, setIsDark] = useState(false);
  const handleChange = () => setIsDark(!isDark);

  // Added dynamic city state defaulting to Durban
  const [city, setCity] = useState<string>("Durban");
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Normalise city name for dictionary checking
    const searchKey = city.toLowerCase().replace(/\s+/g, "_");
    const coords = cityCoordinates[searchKey];

    // If city is not in our dictionary, throw error instead of calling bad coordinates
    if (!coords) {
      setError(`Could not find coordinates for "${city}". Try Durban, Capetown,Eshowe,Pietermaritzburg.`);
      setLoading(false);
      return;
    }

    const latitude = coords.lat;
    const longitude = coords.lon;

    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}` +
      `&longitude=${longitude}` +
      `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code` +
      `&hourly=temperature_2m,weather_code` +
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
      setError(null); // Reset errors on a new search
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`API Error: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          const condition = getWeatherCondition(data.current.weather_code);

          const formattedData: WeatherData = {
            city: city,
            temperature: Math.round(data.current.temperature_2m),
            windSpeed: data.current.wind_speed_10m,
            humidity: data.current.relative_humidity_2m,
            date: data.current.time,
            time: data.current.time,
            condition,
            weatherIcons: condition,
            hourlyList: Array.isArray(data.hourly?.time)
              ? data.hourly.time.map((time: string, index: number) => ({
                  time,
                  temperature: data.hourly.temperature_2m[index],
                  weatherCode: data.hourly.weather_code[index],
                }))
              : [],
          };

          setWeather([formattedData]);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setError(err.message);
          setLoading(false);
        });
    };

    // Debounce the fetch call slightly so it doesn't slam the endpoint mid-word
    const delayDebounce = setTimeout(() => {
      startWeatherFetch();
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [city]);

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
              onSearchCity={setCity} // Passing state setter down to Home
            />
          }
        />
      </Routes>

      
      {loading && <div style={{ textAlign: "center", padding: "10px" }}>Loading data...</div>}
      {error && <div style={{ color: "black", textAlign: "center", padding: "10px" }}>{error}</div>}
    </div>
  );
};

export default App;
