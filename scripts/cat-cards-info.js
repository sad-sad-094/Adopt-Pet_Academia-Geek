/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


let catsCards = JSON.parse(localStorage.getItem('cat'));


let {image, gender, breed, eyes} = catsCards;

document.getElementById('imgCat').setAttribute('src', image);
document.getElementById('genderCat').textContent = gender;
document.getElementById('breedCat').textContent = breed;
document.getElementById('eyesCat').textContent = eyes;

