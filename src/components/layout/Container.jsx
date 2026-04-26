import cl from './Container.module.css';
import Header from './Header/Header';
import CurrentWeather from '../weather/CurrentWeather/CurrentWeather';
import Forecast from '../weather/Forecast/Forecast';
import { useEffect, useState } from 'react';



function Container(params) {

      const [data, setData] = useState(null);

      return (
            <div className={cl.container}>
              <Header setData={setData}/>
              
            {data !== null && 
              <>
                  <CurrentWeather data={data}/> 
                  <Forecast data={data}/>
              </>}
            </div>
      );
}
export default Container;