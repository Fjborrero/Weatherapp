import {useEffect,useState } from "react";


export default function ApiWeather({city}){

    const [citySearch, setCitySearch] = useState([]);
    const APIKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&lang=es&aqi=no`

    
    // Fetch data when the component is mounted
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCitySearch(data);
            })
            .catch((error) => console.log(error));
    }, [city,apiUrl]);

    console.log(citySearch);
    
    return {citySearch}; 
    

}


