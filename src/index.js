import "./default.scss"

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
let timer;
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
        timer = window.setTimeout(removeWiggleMap, 820);
    }
});
weather.addEventListener('click', () => {
    if (mapOrWeather){
        weather.classList.add("wiggle");
        timer = window.setTimeout(removeWiggleWeather, 820);
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
