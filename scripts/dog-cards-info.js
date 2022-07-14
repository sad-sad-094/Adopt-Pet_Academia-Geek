/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


let dogsCards = JSON.parse(localStorage.getItem('dog'));

console.log(dogsCards);

let {image, gender, breed, eyes} = dogsCards;


document.getElementById('imgDog').setAttribute('src', image);
document.getElementById('genderDog').textContent = gender;
document.getElementById('breedDog').textContent = breed;
document.getElementById('eyesDog').textContent = eyes;
