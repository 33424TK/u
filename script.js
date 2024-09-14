'use strict' ;

const addEventOnElem = function (elem, type, callback) {
    if(elem.length > 1) {
        for(let i = 0 ; i < elem.length ; i++) {
            elem[i].addEventListener(type,callback);
        }
    } else {
        elem.addEventListener(type,callback);
    }
}

const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("data-navbar");
const navbarLink = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("data-navbar");

const togglerNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "Click", togglerNavbar);

const header = document.querySelector("[data-header]");

const headerActive = function (){
    if(window.screenY > 150){
        header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
}

addEventOnElem(window , "scroll", headerActive);

let lastScrolledPos = 0;

const headerStickey = function () {
    if(lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }
}

addEventOnElem(window, "scroll", headerStickey);

const section = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for (let i = 0 ; i < section.length ; i++ ) {
        if(section[i].getBoundingClientRect().top < window.innerHeight / 2) {
            section[i].classList.add("active");
        }
        else {
            section[i].classList.remove("active");
        }
    }
}

scrollReveal();
addEventOnElem(window, "scroll", scrollReveal);