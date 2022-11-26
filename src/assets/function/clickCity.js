import { arrayHourlyBuild } from "./chart"
import { percentage, hoursMask, txt1, txt2, txt3, txt4, txt5 } from "../../index";
import isRainy from "./isRainy";
import hoursGeneration from "./hoursGeneration";
import textGeneration from "./textGeneration";

let isFirstOrNot = true;

function clickCity(json){
    const percentageReal = json.forecast[0].probarain += "%";
    arrayHourlyBuild( json.forecast[0].datetime.slice(11,16), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,16), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,16), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,16), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,16), json.forecast[4].rr10)
    percentage.innerHTML = percentageReal;
    isRainy(json);
    hoursGeneration(json);
    isFirstOrNot = false;
    textGeneration(0);
    hoursMask.style.left= '0';
    txt1.style.color= '#2F4C77';
    txt2.style.color= '#ffffff';
    txt3.style.color= '#ffffff';
    txt4.style.color= '#ffffff';
    txt5.style.color= '#ffffff';
}

export default clickCity;
export { isFirstOrNot }