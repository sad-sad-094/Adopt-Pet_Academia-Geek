/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


let petFoodCards = JSON.parse(localStorage.getItem('food'));

let {image} = petsFoodCards;

document.getElementById('imgFood').setAttribute('src', image);
