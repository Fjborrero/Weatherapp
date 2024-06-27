import { useState } from "react";
//import UseApi from "../../hooks/use";
import CitySelected from "../cityselected/cityselected";
import Load from "../isloading/isloading";
import './search.css'

export default function Search () {

    const [city, setCity] = useState("");
    const [isPopOutVisible, setIsPopOutVisible] = useState(false);
    const [isLoad, setIsLoad] = useState(false);

    const handleDeleteSearch = (event) => {
        // Fetch data when button is clicked
        event.preventDefault();
        setCity("");
        setIsPopOutVisible(true)
        setIsLoad(true)

    };

    return(
        <section className="search">
            <div className="content--search">
                <input className="search--input"type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Write a city"/>
                <button className="cancel--button"onClick={handleDeleteSearch}>X</button>
            </div>
                <CitySelected city={city}/> 
                {!city && <Load isVisible={isPopOutVisible} isLoading={isLoad}/>}
        </section>
        
    )

}