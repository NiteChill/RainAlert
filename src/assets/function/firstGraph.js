import { arrayHourlyBuild } from "./chart";
import { input } from "../../index";
import { percentage } from "../../index";
import isRainy from "./isRainy";

function firstGraph(json){
    arrayHourlyBuild( json.forecast[0].datetime.slice(11,16), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,16), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,16), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,16), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,16), json.forecast[4].rr10, json.forecast[0].probarain, json.forecast[1].probarain, json.forecast[2].probarain, json.forecast[3].probarain, json.forecast[4].probarain )
    input.placeholder= json.city.name;
    const percentageReal = json.forecast[0].probarain += "%";
    percentage.innerHTML= percentageReal;
    isRainy();
}

export default firstGraph;