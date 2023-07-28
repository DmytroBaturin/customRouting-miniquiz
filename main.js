import {setLvl, SetRandomNumber, setSolutionInput} from './src/index.js';
import './styles/index.css';
import {route} from "./src/route/index.js";
import {ProfileLogic} from "./src/profileLogic/index.js";

document.querySelector('#app').innerHTML = `
<main>
<div class="header">
  <a class="link" href="/profile">User Name</a>
  <div class="lvl">
    <p active="true">easy</p>
    <p>medium</p>
    <p>hard</p>
  </div>
</div>
<div class="route">
</div>
</main>
`;

window.addEventListener("DOMContentLoaded", () => {
    ProfileLogic(document.querySelector('.link'))
    setLvl(document.querySelectorAll('.lvl p'));
    route(document.querySelector('.link'))
    SetRandomNumber(document.querySelector('.buttonClick'), document.querySelector('.result'), document.querySelector('.solution'), document.querySelector('.correct'), document.querySelector('.nCorrect'))
    setSolutionInput(document.querySelector('.result'), document.querySelector('.solution'), document.querySelector('.correct'), document.querySelector('.nCorrect'))
});
