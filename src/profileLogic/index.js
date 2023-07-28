const profile = []
window.addEventListener("DOMContentLoaded", () => {
   const getProfile = JSON.parse(localStorage.getItem('profile'))
   profile.push(getProfile)
})
export const ProfileLogic = (link) => {

    link.innerHTML = profile[0].name
}