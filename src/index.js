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
import { researchgate } from "fontawesome";

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
let isWritting = false;
input.addEventListener('input', () => {
    isWritting = true;
});
document.addEventListener('keypress', (e) => {
    if(e.key === "Enter" && isWritting && e.target.value !== ""){
        fetch(`https://api.meteo-concept.com/api/location/cities?token=${token}&search=${e.target.value}`)
        .then(res => res.json())
        .then(json => console.log(json));
        isWritting = false;
    }
})