/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import {getDogs, getCats, getFood} from './get-availables.js';


let seeDogs = document.getElementById('seeDogs');
let seeCats = document.getElementById('seeCats');
let seeProducts = document.getElementById('seeProducts');

seeDogs.addEventListener('click', () => getDogs('dog'));
seeCats.addEventListener('click', () => getCats('cat'));
seeProducts.addEventListener('click', () => getFood('food')); 