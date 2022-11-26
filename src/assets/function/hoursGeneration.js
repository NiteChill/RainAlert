import { txt1, txt2, txt3, txt4, txt5 } from "../../index";

function hoursGeneration(json){
    txt1.textContent= json.forecast[0].datetime.slice(11,16);
    txt2.textContent= json.forecast[1].datetime.slice(11,16);
    txt3.textContent= json.forecast[2].datetime.slice(11,16);
    txt4.textContent= json.forecast[3].datetime.slice(11,16);
    txt5.textContent= json.forecast[4].datetime.slice(11,16);
}

export default hoursGeneration;