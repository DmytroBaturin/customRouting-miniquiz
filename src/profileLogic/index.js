
export const profile = []
window.addEventListener("DOMContentLoaded", () => {
   const getProfile = JSON.parse(localStorage.getItem('profile'))
    if(getProfile){
        document.querySelector(".login").style.display = 'none'
        profile.push(getProfile)
        document.querySelector('.link').innerHTML = profile[0].name

    }else{
        document.querySelector("main").style.display = 'none'
    }
})

export const ProfileLogic = (link, name, password, button) => {
   button.addEventListener('click', () => {
       localStorage.setItem('profile', JSON.stringify({
           name: name.value,
           password: password.value,
       }))
       document.querySelector(".login").style.display = 'none'
       document.querySelector("main").style.display = 'initial'

   })
}