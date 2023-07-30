import {setLvl, SetRandomNumber, setSolutionInput} from './src/index.js';
import './styles/index.css';
import {route} from "./src/route/index.js";
import {ProfileLogic} from "./src/profileLogic/index.js";
import {storageAttempts} from "./src/index.js";

document.querySelector('#app').innerHTML = `
<div class="login">
 <div class="formLogin">
 <h1>Login</h1>
 <input placeholder="username" type="text" class="name">
 <input placeholder="password" type="password" class="password">
 <button class="confirmLogin">Log in</button>
</div>
</div>
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
    ProfileLogic(document.querySelector('.link'), document.querySelector('.name'), document.querySelector('.password'), document.querySelector('.confirmLogin'))
    setLvl(document.querySelectorAll('.lvl p'));
    route(document.querySelector('.link'))
    SetRandomNumber(document.querySelector('.buttonClick'), document.querySelector('.result'), document.querySelector('.solution'), document.querySelector('.correct'), document.querySelector('.nCorrect'))
    setSolutionInput(document.querySelector('.result'), document.querySelector('.solution'), document.querySelector('.correct'), document.querySelector('.nCorrect'))

});