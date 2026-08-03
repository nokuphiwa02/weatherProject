import { Navbar } from "./Components/navbar/navbar";
import { SearchBar } from "./Components/searchBar/searchBar";
import WeatherCard from "./Components/weatherCard/weatherCard";
import { type weatherCardProps } from "./Components/weatherCard/weatherCard";
// import { useState } from "react";

type AppProps = {
  weather: weatherCardProps[];

};

export const App: React.FC<AppProps> = ({ weather }) => {

  return (
    <div>
      <Navbar />
      <SearchBar />
      <WeatherCard
        city={weather[0]?.city}
        temperature={weather[0]?.temperature}
        windSpeed={weather[0]?.windSpeed}
        humidity={weather[0]?.humidity}
      />
    </div>
  );
};

export default App;
