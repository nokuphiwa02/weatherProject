import React, {useState} from 'react'

import { DailyForecast } from '../DailyForecast/DailyForecast'
import { HourlyForecast } from '../HourlyForecast/HourlyForecast'


export const ForecastContainer = () => {

    const [active ,setActive] = useState <'hourly' |  'daily'>('hourly')
 


  return (
    
  <div className='content'>
    <div className='btns'>
      <button onClick={()=>setActive('hourly')} disabled={active=== 'hourly'}>Hourly Forecast</button>
       <button onClick={()=>setActive('daily')} disabled={active=== 'daily'}>Daily Forecast</button>
    </div>
        {active === 'hourly' ? <DailyForecast/> : <HourlyForecast/>}
  </div>
  
    
  )
}
