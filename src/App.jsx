import { useState, useEffect } from 'react'; 
import './App.css';
import { getWeatherData } from './services/weatherService';

function App() {
  const [temperature, setTemperature] = useState('Загрузка...');

  
  useEffect(() => {
    getWeatherData().then((data) => {
      // Обращаемся к weatherData.current.temperature, как вы описали в сервисе
      const currentTemp = data.current.temperature; 
      setTemperature(Math.round(currentTemp) + '°C');
    }).catch(err => {
      console.error(err);
      setTemperature('Ошибка загрузки');
    });
  }, []); 

  return (
    <>
      <section id="center">
          <h1>Температура</h1>
          <div>{temperature}</div>
      </section>
    </>
  );
}

export default App;