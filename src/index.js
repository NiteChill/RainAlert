import "./default.scss"

//get app
const app = document.getElementById('app');

//api import
//const token = "d8fbec2589f959ebd35f1a09990a8aee90f928c4d7d8fa7244e935626bf9b133";
const token = "6f0b4550893f9d5bc0ca86b7ce3ed3b583cf8a36e35c8266813c0fd919f99590";

//html import
import Loading from "./component/loading"
import Main from "./component/main"
import Header from "./component/header"
import Footer from "./component/footer"

//fuction import
import noSearch from "./assets/function/noSearch";
import apiSearch from "./assets/function/apiSearch";
import firstGraph from "./assets/function/firstGraph";
import textGeneration from "./assets/function/textGeneration";

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
})

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
        window.setTimeout(removeWiggleMap, 820);
    }
});
weather.addEventListener('click', () => {
    if (mapOrWeather){
        weather.classList.add("wiggle");
        window.setTimeout(removeWiggleWeather, 820);
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

//rainy consts
const degreeIcon = document.querySelector('.degree-icon');
const degreeText = document.querySelector('.degree-text');
const degreeTextInfo = document.querySelector('.degree-text-info');

//textClick
const hoursMask = document.querySelector('.hours-mask');
const txt1 = document.querySelector('.txt-1');
const txt2 = document.querySelector('.txt-2');
const txt3 = document.querySelector('.txt-3');
const txt4 = document.querySelector('.txt-4');
const txt5 = document.querySelector('.txt-5');
const arrayTxt = [ txt1, txt2, txt3, txt4, txt5 ]
arrayTxt.forEach ( item => {
    item.addEventListener( 'click', () => {
        arrayTxt.forEach( item => {
            item.style.color= '#ffffff';
        })
        switch ( item.id ) {
            case 'txt1' :
                hoursMask.style.left= '0';
                txt1.style.color= '#2F4C77';
                textGeneration(0);
                break;
            case 'txt2' :
                hoursMask.style.left= '20%';
                txt2.style.color= '#2F4C77';
                textGeneration(1);
                break;
            case 'txt3' :
                hoursMask.style.left= '40%';
                txt3.style.color= '#2F4C77';
                textGeneration(2);
                break;
            case 'txt4' :
                hoursMask.style.left= '60%';
                txt4.style.color= '#2F4C77';
                textGeneration(3);
                break;
            case 'txt5' :
                hoursMask.style.left= '79%';
                txt5.style.color= '#2F4C77';
                textGeneration(4);
                break;
            default:
                console.log("this button is not working properly, you may ask admins");
        }
    });
});

//heure
const actualHour = document.querySelector('.actual-hour');
let date;
let actualDate;
actualDate = window.setInterval( () => {
    date = new Date();
    actualHour.textContent = `${date.getHours()}:${date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()}`
} , 1000);

//export
export { percentage, input, button, results, name, token, degreeIcon, degreeText, degreeTextInfo, txt1, txt2, txt3, txt4, txt5, hoursMask, parisLgLat };