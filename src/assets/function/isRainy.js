import { degreeIcon } from "../../index";

function isRainy(json){
    let wind70 = json.forecast[0].probawind70;
    let wind100 = json.forecast[0].probawind100;
    let rain = json.forecast[0].probarain;
    degreeIcon.classList.add('fa-solid');
    if( wind70 >= "75%" | wind100 >= "75%" ){
        degreeIcon.className='degree-icon fa-7x fa-solid fa-wind';
    }
    else if( rain >= "75%" ){
        degreeIcon.className='degree-icon fa-7x fa-solid fa-cloud-showers-heavy';
    }
    else if( rain >= "30%" ){
        degreeIcon.className='degree-icon fa-7x fa-solid fa-cloud';
    }
    else if( rain < "30%" ){
        degreeIcon.className='degree-icon fa-7x fa-solid fa-sun';
    }
}

export default isRainy;