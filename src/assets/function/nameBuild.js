import { input } from "../../index";
import { name } from "../../index";
import { token } from "../../index";
import clickCity from "./clickCity";
import noSearch from "./noSearch";

function nameBuild(json){
    json.cities.forEach( item => {
        const city = document.createElement('div');
        const lat = item.latitude;
        const long = item.longitude;
        const insee = item.insee;
        const cityName = item.name;
        city.classList.add('city');
        city.textContent = cityName;
        city.addEventListener('click',() => {
            fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${lat}%2C${long}&insee=${insee}&hourly=true`)
            .then(res => res.json())
            //.then(json => console.log(json))
            .then(json => clickCity(json))
            //.then(json => arrayHourlyBuild( json.forecast[0].datetime.slice(11,16), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,16), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,16), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,16), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,16), json.forecast[4].rr10))
            noSearch();
            input.placeholder= cityName;
        });
        const line = document.createElement('div');
        line.classList.add('line');
        name.append(city, line);
    });
}

export default nameBuild;