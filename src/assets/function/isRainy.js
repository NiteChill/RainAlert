import { degreeIcon } from "../../index";
import { degreeText } from "../../index";

function isRainy(json){
    let wind70 = json.forecast[0].probawind70;
    let wind100 = json.forecast[0].probawind100;
    let rain = json.forecast[0].probarain;
    let degreeCelcius = json.forecast[0].temp2m;
    degreeIcon.classList.add('fa-solid');
    if( wind70 >= "75%" | wind100 >= "75%" ){
        degreeIcon.classList.add('fa-wind')
    }
    else if( rain >= "75%" ){
        degreeIcon.classList.add('fa-solid');
        degreeIcon.classList.add('fa-cloud-showers-heavy');
    }
    else if( rain >= "30%" ){
        degreeIcon.classList.add('fa-cloud');
    }
    else if( rain < "30%" ){
        degreeIcon.classList.add('fa-sun');
    }
    degreeText.textContent= degreeCelcius += "°C";

}

export default isRainy;