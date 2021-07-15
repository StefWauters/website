"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector('#arrow').addEventListener("click", goPageDown);

}

function goPageDown() {
    document.querySelector('#content').scrollIntoView({
        behavior: 'smooth'
    });
}