import "./default.scss"
import { ellipsisHAlt, researchgate } from "fontawesome";

//api import
const token = "d8fbec2589f959ebd35f1a09990a8aee90f928c4d7d8fa7244e935626bf9b133";

//html import
import Loading from "./component/loading"
import Main from "./component/main"
import Header from "./component/header"
import Footer from "./component/footer"

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
function apiSearch() {
    name.innerHTML= "";
    fetch(`https://api.meteo-concept.com/api/location/cities?token=${token}&search=${input.value}`)
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => nameBuild(json));
}
let arrayHourly;
function arrayHourlyBuild( h1, t1, h2, t2, h3, t3, h4, t4, h5, t5 ){
    arrayHourly = [
        { hour: h1, pluie: t1 },
        { hour: h2, pluie: t2 },
        { hour: h3, pluie: t3 },
        { hour: h4, pluie: t4 },
        { hour: h5, pluie: t5 },
    ]
    console.log(arrayHourly);
}
function nameBuild(json){
    json.cities.forEach( item => {
        const city = document.createElement('div');
        const lat = item.latitude;
        const long = item.longitude;
        const insee = item.insee;
        city.classList.add('city');
        city.textContent = item.name;
        city.addEventListener('click',() => {
            fetch(`https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&latlng=${lat}%2C${long}&insee=${insee}&hourly=true`)
            .then(res => res.json())
            .then(json => arrayHourlyBuild( json.forecast[0].datetime.slice(11,13), json.forecast[0].rr10, json.forecast[1].datetime.slice(11,13), json.forecast[1].rr10, json.forecast[2].datetime.slice(11,13), json.forecast[2].rr10, json.forecast[3].datetime.slice(11,13), json.forecast[3].rr10, json.forecast[4].datetime.slice(11,13), json.forecast[4].rr10 ))
        });
        const line = document.createElement('div');
        line.classList.add('line');
        name.append(city, line);
    });
}
function displayResearch() {results.style.display= 'flex'}
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
    input.style.background= 'rgba(255, 255, 255, 0.28)';
    input.style.color='white';
    input.style.borderRadius= '8px';
    input.style.backgroundImage= 'url("./assets/images/glass.png")';
    input.style.backgroundRepeat= 'no-repeat';
    input.style.backgroundSize= '60px';
    input.style.backgroundPosition= '400px 11px';
    button.style.display= 'none';
    results.style.display= 'none';
    results.style.height= '0';
    input.value = "";
    let timerHeight = window.setTimeout(displayResearch, 500);
    name.innerHTML= "";
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