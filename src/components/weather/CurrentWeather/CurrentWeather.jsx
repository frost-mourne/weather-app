import cl from "./CurrentWeather.module.css";
import {getWindDirection, getWeatherDescription} from "../../../utils/weatherUtils";

function CurrentWeather({data}) {
    
    if (!data || !data.daily) {
        return <div>Выберите город для прогноза</div>;
    }
    
    const dailyMax = Math.round(data.daily.temperatureMax[0]);
    const dailyMin = Math.round(data.daily.temperatureMin[0]);
    const dailyNow = Math.round(data.current.temperature);
    const windSpeed = Math.round(data.current.windSpeed);
   
    const windDirection = getWindDirection(data.current.windDirection);

    return (
        <div>
            <h1>Сейчас</h1>
            <div className={cl.container}><p>
                Температура на сегодня: </p>
                {getWeatherDescription(data.current.weatherCode)}<p>
                Сейчас: {dailyNow}&deg;</p>
                Максимальная: {dailyMax}&deg;<p>
                Минимальная: {dailyMin}&deg;</p>
                Скорость ветра: {windSpeed} м/c {windDirection}<p></p>
            </div>
        </div>
      );
}
export default CurrentWeather;