import "./default.scss"

//api import
const token = "d8fbec2589f959ebd35f1a09990a8aee90f928c4d7d8fa7244e935626bf9b133";
//https://api.meteo-concept.com/api/location/cities?token=${token}&search=Renne
// curl -X 'GET' \
//   'https://api.meteo-concept.com/api/location/cities?token=${token}&search=${input.value}' \
//   -H 'accept: application/json'

//html import
import Loading from "./component/loading"
import Main from "./component/main"
import Header from "./component/header"
import Footer from "./component/footer"
import { ellipsisHAlt, researchgate } from "fontawesome";

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
function nameBuild(json){
    json.cities.forEach( item => {
        const city = document.createElement('div');
        city.classList.add('city');
        city.textContent = item.name;
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
    results.style.height= '80%';
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
    name.innerHTML= ""
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