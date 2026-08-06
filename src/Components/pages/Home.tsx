import { Navbar } from "../../Components/navbar/navbar";
import { SearchBar } from "../../Components/searchBar/searchBar";
import WeatherCard from "../../Components/weatherCard/weatherCard";
import { ForecastContainer } from "../../Components/forecastContainer/ForecastContainer";
import React from "react";
import { type weatherCardProps } from "../../Components/weatherCard/weatherCard";
import styles from "./Setting.module.css";
import { Theme } from "../Theme/Theme";

type HomeProps = {
  weather: weatherCardProps[];
  isDark: boolean;
  handleChange: () => void;
};

export const Home: React.FC<HomeProps> = ({
  weather,
 
}) => {
  return (
    <>
     
        <Navbar />
        <SearchBar />
        <WeatherCard
          city={weather[0].city}
          temperature={weather[0].temperature}
          windSpeed={weather[0].windSpeed}
          humidity={weather[0].humidity}
        />
        <ForecastContainer />
      
    
    </>
  );
};
