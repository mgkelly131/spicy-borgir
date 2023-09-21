let burger = document.querySelector('.burger');
let burger_icon = document.querySelector('.fa-bars');
let nav_menu = document.querySelector('.nav-menu');

burger.onclick = () => {
    if(burger_icon.classList.contains("fa-bars")){
        burger_icon.classList.replace("fa-bars","fa-times");
    }
    else{
        burger_icon.classList.replace("fa-times","fa-bars");
    }
}

burger.addEventListener(('click'), () => {
    nav_menu.classList.toggle('is-active');
});