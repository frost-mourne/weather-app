import {getDate, getWeatherDescription} from "../../../utils/weatherUtils";
import cl from "./DailyForecast.module.css";

function DailyForecast({data}) {
    
    if (!data || !data.daily) {
        return null;
    }
    return (
        <div>
            <h1>На 7 дней</h1>
            <div className={cl.container}>
                {data.daily.time.map((time, i) =>(
                    <div key={time.toISOString()}>
                        <p>{i == 0 && "Сегодня"} {i == 1 && "Завтра"}  {getDate(time)}</p>
                        <p>{getWeatherDescription(data.daily.weatherCode[i])}</p>
                        <p>Максимальная: {Math.round(data.daily.temperatureMax[i])}&deg;</p>
                        <p>Минимальная: {Math.round(data.daily.temperatureMin[i])}&deg;</p>
                    </div>
                ))}
            </div>
        </div>
      );
}
export default DailyForecast;