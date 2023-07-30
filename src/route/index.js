import Profile from "../../pages/profile/profile.js";
import Main from "../../pages/main.js";
import {SetRandomNumber, setSolutionInput} from "../index.js";
const routes = {
    '/': Main,
    "/profile": Profile
}
window.addEventListener("DOMContentLoaded", () => {
    const location = window.location.pathname
    const route = routes[location]()
    const initialLocate = () => {
        document.querySelector(".route").appendChild(route)
    }
    initialLocate()
})
export const route = (link) => {
    link.addEventListener('click', (event) => {
        const location = window.location.pathname
        event.preventDefault();
        window.history.pushState({
            locationPage: '/profile'
        }, "", event.target.href);
        if (window.history.state.locationPage === location){
            window.history.pushState({}, '', '/');
            handleChange()
        }else {
            handleChange()
        }
    });
}

const handleChange = () => {
    const location = window.location.pathname
    const route = routes[location]()
    const routeContainer = document.querySelector('.route');
    routeContainer.innerHTML = '';
    routeContainer.appendChild(route);
    if(routeContainer.querySelector('.main')) {
        SetRandomNumber(routeContainer.querySelector('.buttonClick'), routeContainer.querySelector('.result'), routeContainer.querySelector('.solution'), routeContainer.querySelector('.correct'), routeContainer.querySelector('.nCorrect'));
        setSolutionInput(routeContainer.querySelector('.result'), routeContainer.querySelector('.solution'), routeContainer.querySelector('.correct'), routeContainer.querySelector('.nCorrect'));
    }else {
      return 0
    }
}

window.onpopstate = handleChange
window.route = route;