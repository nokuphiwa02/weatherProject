import { Navbar } from "../../Components/navbar/navbar";
import { SearchBar } from "../../Components/searchBar/searchBar";
import WeatherCard from "../../Components/weatherCard/weatherCard";
import { ForecastContainer } from "../../Components/forecastContainer/ForecastContainer";
import { useState } from "react";
import type { WeatherData } from "../types/types";

type HomeProps = {
weather: WeatherData[];
isDark: boolean;
handleChange: () => void;
onSearchCity: (city: string) => void;
};

export const Home: React.FC<HomeProps> = ({ weather, onSearchCity }) => {
const [units, setUnits] = useState("°C");

if (!weather || weather.length === 0) {
return <div>No weather data available.</div>;
}
return (
<>
<Navbar units={units} changeUnits={(newUnits) => setUnits(newUnits)} />
<SearchBar onSearch={onSearchCity} />
<WeatherCard weather={weather[0]} units={units} />
<ForecastContainer weather={weather} units={units} />
</>
);
};