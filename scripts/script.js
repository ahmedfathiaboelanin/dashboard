let menu = document.getElementById("menu");
let aside = document.getElementById("sideNav");
// toggle the side nav
menu.onclick = () => {
    aside.classList.toggle("hide");
}