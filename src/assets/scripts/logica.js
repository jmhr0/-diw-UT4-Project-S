// Función para cambiar la fuente
function changeFontToOpenDyslexic() {
    // // Añade la fuente a los estilos importados
    // var newStyle = document.createElement('style');
    // newStyle.appendChild(document.createTextNode("@font-face {" +
    // "font-family: 'OpenDyslexicRegular'; " +
    // "src: url('../fonts/OpenDyslexic-Regular.otf') format('opentype'); " +
    // "url('./fonts/opendyslexic-regular-webfont.svg#opendyslexicregular') format('svg');" +
    // "}"));
    // document.head.appendChild(newStyle);

    // // Aplica las fuentes a todos los elementos
    // var allDomElements = document.getElementsByTagName('*');
    // for (var i = 0; i < allDomElements.length; i++) {
    //     allDomElements[i].style.fontFamily = 'OpenDyslexicRegular, Arial, sans-serif';
    // }

    var allDomElements = document.getElementsByTagName('*');
     for (var i = 0; i < allDomElements.length; i++) {
         allDomElements[i].style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
     }
}

//La funcion se inicializara on load
document.addEventListener("DOMContentLoaded", function() {
    // Se busca un <a> cuyo contenido de texto sea exactamente 'Activar tipo de letra accesible'
    var activateLink = Array.from(document.querySelectorAll('a')).find(function(element) {
        return element.textContent === 'Activar tipo de letra accesible';
    });

    // Agrega un event listener para el enlace previo
    activateLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la redireccion del enlace (comportamiento predeterminado)
        changeFontToOpenDyslexic(); // Llamada a la función
    });

    // Logica para el menu desplegable
    var settingsIcon = document.querySelector('.settings-icon');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    settingsIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.settings-icon')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });
});

// Función para cambiar la imagen de fondo
// Incluye elementos multimedia en al menos 3 formatos
//  diferentes (relacionado con UT06).
function changeBackgroundImage(imagePath1, imagePath2,imagePath3) {
    var pictureElement = document.querySelector('.main__picture picture');

    var sourceElements = pictureElement.querySelectorAll('source');

    console.log(imagePath2)
    console.log(imagePath1)
    // Cambia a la imagen en webp
    sourceElements.forEach(function(source) {
        if (source.type === 'image/webp') {
            source.srcset = imagePath2;
        } else if (source.type === 'image/jpg') {
            source.srcset = imagePath1;
        }
    });

    // Cambia a la imagen en jpg
    var imgElement = pictureElement.querySelector('img');
    imgElement.src = imagePath3;
    imgElement.srcset = imagePath3;
}


// Eventos para los logos
// Cambia la imagen de fondo y la opacidad dependiendo de la imagen clickeada
import lolPng from "../images/fondo-img-lol.png";
import lolJpg from "../images/fondo-img-lol.jpg";
import lolWbp from "../images/fondo-img-lol.webp";
document.getElementById('lol-logo').addEventListener('click', function() {
    changeBackgroundImage(lolPng, lolJpg, lolWbp);
    adjustLogoOpacity(this);
});

import wowPng from "../images/fondo-img-wow.png";
import wowJpg from "../images/fondo-img-wow.jpg";
import wowWbp from "../images/fondo-img-wow.webp";
// document.getElementById('wow-logo').addEventListener('click', function() {
//     changeBackgroundImage('./assets/images/fondo-img-wow');
//     adjustLogoOpacity(this);
// });
document.getElementById('wow-logo').addEventListener('click', function() {
    changeBackgroundImage(wowPng, wowJpg, wowWbp);
    adjustLogoOpacity(this);
});

import valorantPng from "../images/fondo-img-valorant.png";
import valorantJpg from "../images/fondo-img-valorant.jpg";
import valorantWbp from "../images/fondo-img-valorant.webp";
document.getElementById('valorant-logo').addEventListener('click', function() {
    changeBackgroundImage(valorantPng, valorantJpg, valorantWbp);
    adjustLogoOpacity(this);
});

import helldiversPng from "../images/fondo-img-helldivers2.png";
import helldiversJpg from "../images/fondo-img-helldivers2.jpg";
import helldiversWbp from "../images/fondo-img-helldivers2.webp";
document.getElementById('helldivers2-logo').addEventListener('click', function() {
    changeBackgroundImage(helldiversPng, helldiversJpg, helldiversWbp);
    adjustLogoOpacity(this);
});

function adjustLogoOpacity(clickedLogo) {
    document.querySelectorAll('.game-logo').forEach(function(logo) {
        logo.style.opacity = "0.5";
    });
    clickedLogo.style.opacity = "1";
}
