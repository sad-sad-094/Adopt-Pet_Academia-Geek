/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import {getPets, getProducts} from './get-data.js'

let animals = getPets;
let foods = getProducts;

function getDogs(animal) {

  let dogs = animals.filter(animal);

  localStorage.setItem('dogs', JSON.stringify(dogs));

}

function getCats (animal) {

  let cats = animals.filter(animal);

  localStorage.setItem('cats', JSON.stringify(cats));

}

function getFood(food) {

  let foodstuff = foods.filter(food);

  localStorage.setItem('foodstuff', JSON.stringify(foodstuff))

}


export {
  getDogs,
  getCats,
  getFood
}
