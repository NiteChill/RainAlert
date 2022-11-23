import { arrayHourlyBuild } from "./chart"
import { percentage } from "../../index";
function clickCity(json){
    const percentageReal = json.forecast[0].probarain += "%";
    arrayHourlyBuild( json.forecast[0].datetime.slice(11,16), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,16), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,16), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,16), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,16), json.forecast[4].rr10)
    percentage.innerHTML= percentageReal;
}

export default clickCity;