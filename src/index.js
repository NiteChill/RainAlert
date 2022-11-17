const fa = require("fontawesome");
import "./default.scss"
import Loading from "./component/loading"
import Main from "./component/main"
import Header from "./component/header"
import Footer from "./component/footer"
const app = document.getElementById('app');
let content = "";
content += Loading();
content += Header();
content += Main();
content += Footer();
app.innerHTML = content;
const loadingScreen = document.querySelector('.loading-screen');
window.setTimeout(loadingAnimation, 1500);

function loadingAnimation(){
    loadingScreen.style.marginLeft = '-550px';
}
