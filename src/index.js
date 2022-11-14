import "./default.scss"
import Loading from "./component/loading"
import Home from "./component/home"
const app = document.getElementById('app');
let content = "";
content += Loading();
content += Home();
app.innerHTML = content;
const loadingScreen = document.querySelector('.loading-screen');
let waitingLoading = window.setTimeout(loadingAnimation, 1500);

function loadingAnimation(){
    loadingScreen.style.marginLeft = '-100%';
}
