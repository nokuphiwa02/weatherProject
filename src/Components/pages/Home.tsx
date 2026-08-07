import { Navbar } from "../../Components/navbar/navbar";
import { SearchBar } from "../../Components/searchBar/searchBar";
import WeatherCard from "../../Components/weatherCard/weatherCard";
import { ForecastContainer } from "../../Components/forecastContainer/ForecastContainer";
import React from "react";
import type { WeatherData } from "../types/types";

type HomeProps = {
  weather: WeatherData[];
  isDark: boolean;
  handleChange: () => void;
};

export const Home: React.FC<HomeProps> = ({ weather }) => {
  if (!weather || weather.length === 0) {
    return <div>No weather data available.</div>;
  }

  return (
    <>
      <Navbar />
      <SearchBar />
      <WeatherCard weather={weather[0]} />
      <ForecastContainer />
    </>
  );
};
