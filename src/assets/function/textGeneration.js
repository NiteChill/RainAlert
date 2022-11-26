import { degreeTextInfo, parisLgLat, token } from "../../index";
import { isFirstOrNot } from "./clickCity";
import { lat, long, insee } from "./nameBuild";

function textGeneration(textNbr){
    let whichText = textNbr;
    if ( isFirstOrNot ) {
        fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${parisLgLat[0]}%2C${parisLgLat[1]}&hourly=true`)
        .then(res => res.json())
        .then(json => textGenerationReal(json, whichText))
    }
    else {
        fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${lat}%2C${long}&insee=${insee}&hourly=true`)
        .then(res => res.json())
        .then(json => textGenerationReal(json, whichText))
    }
}
function textGenerationReal(json, whichText){
    const hour = json.forecast[whichText].datetime.slice(11,16);
    const pluie = json.forecast[whichText].rr10;
    degreeTextInfo.textContent = `${pluie} mm de pluie à ${hour}`;
}

export default textGeneration;
//json.forecast[0].datetime.slice(11,16)