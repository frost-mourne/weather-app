// import { useState } from "react";

import { useEffect, useState } from "react";
import {getWeatherData} from "../../../services/weatherService"
function SearchResult ({response, setData}) {

    const [coordinates, setCoordinates] = useState(null);

    if (!response || response.length === 0) return null;
    
    const handleClick = (city) =>{
        console.log("latitude: " + city.latitude + "\n" + "longitude: " + city.longitude)
        setCoordinates({latitude: city.latitude, longitude: city.longitude});
    }
    useEffect(()=>{

    let str = '';
    if (coordinates !== null){
        const response = getWeatherData(coordinates.latitude, coordinates.longitude);
        response.then(resp =>{
            setData(resp);
        });
    }
    }, [coordinates])

    return (
    <div>
        <ul>
        {response.map((city) => (
                <li key={city.id} id={city.id} onMouseDown={() => handleClick(city)}>
                    {city.name}
                </li>
            ))}
        </ul>
    </div>
    )
}
export default SearchResult;