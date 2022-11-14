import "./default.scss"
import Loading from "./component/loading"
const app = document.getElementById('app');

let content = "";
content += Loading();
app.innerHTML = content;
