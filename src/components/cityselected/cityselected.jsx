import UseApi from "../../hooks/use";
import PropTypes from 'prop-types';
import Load from "../isloading/isloading";
import './cityselected.css';

CitySelected.propTypes = {
    city: PropTypes.string,
    name: PropTypes.string,
}
export default function CitySelected ({city}){

    const {citySearch}= UseApi({city});

    //const [date, time] = citySearch.localTime.split(' ');

    if(citySearch.name == undefined){
        return(
            <Load isVisible={true} isLoading={false}/>
        )
    }
    console.log(citySearch)

return(
    <section className="box">
        <div key={citySearch.name} className="card">
                <div className="image-condition"><img src={citySearch.icon} alt={citySearch.condition} /></div>
                <p className="weather">{citySearch.temp} °C</p>
                <p className="country"> {citySearch.name} - {citySearch.country}</p>
        </div>
        <div className="card-down">
            <div className="day">
                <p className="date">Day: {citySearch.localTime.split('')}</p>
                <p className="time">Hour: {citySearch.localTime}</p>
            </div>
            <div className="finally"><p>{citySearch.condition}</p></div>
        </div>
    </section>
    
)
}

