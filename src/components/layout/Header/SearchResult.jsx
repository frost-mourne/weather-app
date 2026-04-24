// import { useState } from "react";

function SearchResult ({response}) {

    if (!response || response.length === 0) return null;
    
    const handleClick = (city) =>{
        console.log("latitude: " + city.latitude + "\n" + "longitude: " + city.longitude)
    }

    return (
    <div>
        <ul>
        {response.map((city) => (
                <li key={city.id} id={city.id} onClick={() => handleClick(city)}>
                    {city.name}
                </li>
            ))}
        </ul>
    </div>
    )
}
export default SearchResult;