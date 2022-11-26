import { input, button, results, name } from "../../index";

function displayResearch() {results.style.display= 'flex'}
function noSearch(){
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
    window.setTimeout(displayResearch, 500);
    name.innerHTML= "";
}

export default noSearch;