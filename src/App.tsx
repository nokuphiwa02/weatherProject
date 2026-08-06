import { Route, Routes } from "react-router-dom";
import { Setting } from "./Components/pages/setting";
import { Home } from "./Components/pages/Home";
import { useState } from "react";

export const App = () => {

   const [isDark, setIsDark] = useState(false);
   const handleChange = () => setIsDark(!isDark);




  return (
    <div  data-theme={isDark ? "dark" : "light"}>
      <Routes>
        <Route path="/settings" element={<Setting isDark={isDark} handleChange={handleChange}/>} />
        <Route
          path="/"
          element={
            <Home
            isDark={isDark} 
            handleChange={handleChange}
             weather={[{ city:"Durban" ,temperature:24 ,windSpeed:15, humidity:65}]} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
