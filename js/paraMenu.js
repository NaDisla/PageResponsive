"use strict"
var contador = 1;
function PresionarMenu()
{
    const barraMenu = document.getElementsByClassName('menu');
    if(contador == 1)
    {
        barraMenu[0].style.transition = "all ease-in-out 650ms";
        barraMenu[0].style.left = "0";
        contador = 0;
    }
    else
    {
        barraMenu[0].style.left = "-100%";
        contador = 1;
    }
}
