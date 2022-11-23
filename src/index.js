import "./default.scss"
import { ellipsisHAlt, researchgate } from "fontawesome";

//api import
const token = "d8fbec2589f959ebd35f1a09990a8aee90f928c4d7d8fa7244e935626bf9b133";

//html import
import Loading from "./component/loading"
import Main from "./component/main"
import Header from "./component/header"
import Footer from "./component/footer"

//fuction import
import { arrayHourlyBuild } from "./assets/function/chart"
import noSearch from "./assets/function/noSearch";
import apiSearch from "./assets/function/apiSearch";

//geolocation
const geolocation = require('geolocation')
const parisLgLat = [
    48.856614,
    2.3522219
]
 
geolocation.getCurrentPosition((err,position) => {
  if (err) throw err
  fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${parisLgLat[0]}%2C${parisLgLat[1]}&hourly=true`)
  //fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${position.coords.latitude}%2C${position.coords.longitude}&hourly=true`)
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => firstGraph(json))
    function firstGraph(json){
        arrayHourlyBuild( json.forecast[0].datetime.slice(11,16), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,16), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,16), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,16), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,16), json.forecast[4].rr10, json.forecast[0].probarain, json.forecast[1].probarain, json.forecast[2].probarain, json.forecast[3].probarain, json.forecast[4].probarain )
        input.placeholder= json.city.name;
        const percentageReal = json.forecast[0].probarain += "%";
        percentage.innerHTML= percentageReal;
    }
})

//get app
const app = document.getElementById('app');

//building html with component
let content = "";
content += Loading();
content += Header();
content += Main();
content += Footer();
app.innerHTML = content;

//loading screen
const loadingScreen = document.querySelector('.loading-screen');
window.setTimeout(loadingAnimation, 1500);
function loadingAnimation(){loadingScreen.style.marginLeft = '-550px';};

//switch pages 
const map = document.querySelector('.map');
const weather = document.querySelector('.weather');
const mapScreen = document.querySelector('.map-screen');
const indicatorLine = document.querySelector('.indicator-line');
let mapOrWeather = true;
let timerMap;
let timerWeather;
function removeWiggleMap(){map.classList.remove("wiggle")};
function removeWiggleWeather(){weather.classList.remove("wiggle")};
map.addEventListener('click', () => {
    if (mapOrWeather){
        mapScreen.style.marginLeft = '0';
        map.classList.remove("wiggle");
        map.style.opacity = '1';
        weather.style.opacity = '.7';
        indicatorLine.style.marginRight= '62.5%';
        mapOrWeather = false;
    }
    else{
        map.classList.add("wiggle");
        timerMap = window.setTimeout(removeWiggleMap, 820);
    }
});
weather.addEventListener('click', () => {
    if (mapOrWeather){
        weather.classList.add("wiggle");
        timerWeather = window.setTimeout(removeWiggleWeather, 820);
    }
    else{
        mapScreen.style.marginLeft = '-100%';
        weather.classList.remove("wiggle");
        weather.style.opacity = '1';
        map.style.opacity = '.7';
        indicatorLine.style.marginRight= '12.5%';
        mapOrWeather = true;
    }
});

//input and results
const input = document.querySelector('.research');
const results = document.querySelector('.results');
const cancel = document.querySelector('.cancel');
const search = document.querySelector('.search');
const button = document.querySelector('.button');
const name = document.querySelector('.name');
const percentage = document.querySelector('.chance-percentage');
input.addEventListener('click', () => {
    input.style.background= 'white';
    input.style.color='#000';
    input.style.borderRadius= '8px 8px 0 0';
    input.style.backgroundImage= 'url("./assets/images/black-glass.png")';
    input.style.backgroundRepeat= 'no-repeat';
    input.style.backgroundSize= '60px';
    input.style.backgroundPosition= '400px 11px';
    button.style.display= 'flex';
    results.style.height= '69%';
});
cancel.addEventListener('click', ()=> {
    noSearch();
});
document.addEventListener('keypress', (e) => {
    if(e.key === "Enter" && e.target.value !== ""){
        apiSearch();
    }
})
search.addEventListener('click', () => {
    if(input.value !== ""){
        apiSearch();
    }
})

//export
export { percentage, input, button, results, name, token };