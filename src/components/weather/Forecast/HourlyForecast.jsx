import cl from "./HourlyForecast.module.css";
import {getTime} from "../../../utils/weatherUtils";

function HourlyForecast({data}) {
    if (!data || !data.hourly) {
        return null;
    }
    return (
        <div>
        <h1>По часам</h1>
            <div className={cl.container}>
                {data.hourly.time.map((time, i) =>(
                    (i / 24 < 1) &&
                    <div key={"time-"+time.toISOString()}>
                        <p>{getTime(time)}</p>
                        <p>{Math.round(data.hourly.temperature[i])}&deg;</p>
                    </div> 
                ))}
            </div>
        </div>
      );
}
export default HourlyForecast;