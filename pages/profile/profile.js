import './styleprofile.css'
function Profile() {
    const element = document.createElement('div');
    element.innerHTML = `
           <div class="pageProfile">
           <div class="stats">
           <h1>Statistic</h1>
           <div class="answers">
           <p class="correctans">Correct answer: 0</p>
            <p class="ncorrectans">not Correct answer: 0</p>
            </div>
           </div>
           </div>`
    return element;
}



export default Profile;
