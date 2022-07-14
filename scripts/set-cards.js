/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import {getPets, getProducts} from './get-data.js'

const petsData = getPets;
const productsData = getProducts;



function recommendedCards () {

  let dogsCards = petsData[0];
  let catsCards = petsData[3];

  let petFoodCards = productsData[0];

  localStorage.setItem('dog', JSON.stringify(dogsCards));
  localStorage.setItem('cat', JSON.stringify(catsCards));
  localStorage.setItem('food', JSON.stringify(petFoodCards));

  console.log(dogsCards);
}


export { recommendedCards }
