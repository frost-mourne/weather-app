import { useEffect } from "react";
import { useState } from "react";
import { getGeoposition } from "../../../services/geocodingService"
import SearchResult from "./SearchResult";

function SearchBar({setData}) {
    const [search, setSearch] = useState('');
    const [response, setResponse] = useState(null);
    const [showResult, setShowResult] = useState(false);
    useEffect(() =>{
        if (!search.trim()){
            setResponse(null);
            return;
        }
        if (!search) {
            return;
        }

        const timer = setTimeout(()=>{

            const response = getGeoposition(search);
            response.then(resp => {
                setResponse(resp);
            })
        }, 2000)
        return () => clearTimeout(timer);
    }, [search])

    return (
        <>
            <input type="search" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                onFocus={()=>setShowResult(true)}
                onBlur={()=>setShowResult(false)}
                ></input>
            {showResult &&
                (response && response.length > 0 ? <SearchResult response={response} setData={setData}/> : <p>Not found</p>)
            }
            
        </>
      );
}
export default SearchBar;