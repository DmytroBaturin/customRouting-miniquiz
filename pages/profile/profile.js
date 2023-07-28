import './styleprofile.css'
function Profile() {
    const element = document.createElement('div');
    element.innerHTML = `<div class="pageProfile">
           <div class="stats">
           <h1>Statistic</h1>
           <p>Correct answer: 0</p>
           </div>
           </div>`
    return element;
}

export default Profile;
