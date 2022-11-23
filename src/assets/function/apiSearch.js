import { name } from "../../index";
import nameBuild from "./nameBuild";
import { input } from "../../index";
import { token } from "../../index";
function apiSearch() {
    name.innerHTML= "";
    fetch(`https://api.meteo-concept.com/api/location/cities?token=${token}&search=${input.value}`)
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => nameBuild(json));
}

export default apiSearch;