import cl from "./Forecast.module.css";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

function Forecast({data}) {

    return (
        <div className={cl.container}>
            <HourlyForecast data={data}/>
            <DailyForecast data={data}/>
        </div>
      );
}
export default Forecast;