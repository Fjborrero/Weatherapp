import ApiWeather from "../service/api/api";

export default function UseApi({city}){

    console.log(city)

    const {citySearch}= ApiWeather({city});

    console.log(citySearch)

    const mappedWeather = {
        name: citySearch?.location?.name,
        country: citySearch?.location?.country,
        localTime: citySearch?.location?.localtime,
        temp: citySearch?.current?.temp_c,
        condition: citySearch?.current?.condition.text,
        icon: citySearch?.current?.condition.icon
    }

    return {citySearch: mappedWeather};
}