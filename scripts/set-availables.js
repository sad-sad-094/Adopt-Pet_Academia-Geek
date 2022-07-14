/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


let dogs = JSON.parse(localStorage.getItem('dogs'));
let cats = JSON.parse(localStorage.getItem('cats'));
let foodstuff = JSON.parse(localStorage.getItem('foodstuff'));

dogs.forEach((item, index, dogs) => {
  let img = document.getElementById(`imgDog${index}`);
  img.setAttribute('src', item[index].image);
  let gender = document.getElementById(`genderDog${index}`);
  gender.textContent = item[index].gender;
  let breed = document.getElementById(`breedDog${index}`);
  breed.textContent = item[index].breed;
  let eyes = document.getElementById(`eyesDog${index}`);
  eyes.textContent = item[index].eyes;
})

cats.forEach((item, index, cats) => {
  let img = document.getElementById(`imgCat${index}`);
  img.setAttribute('src', item[index].image);
  let gender = document.getElementById(`genderCat${index}`);
  gender.textContent = item[index].gender;
  let breed = document.getElementById(`breedCat${index}`);
  breed.textContent = item[index].breed;
  let eyes = document.getElementById(`eyesCat${index}`);
  eyes.textContent = item[index].eyes;
})

let forCats = foodstuff.filter('cat');

forCats.forEach((item, index, forCats) => {
  let img = document.createElement(`imgCatFood${index}`);
  img.setAttribute('src', item[index].image);
  let name = document.getElementById(`nameCatFood${index}`);
  name.textContent = item[index].name;
  let price = document.getElementById(`priceCatFood${index}`);
  price.textContent = item[index].price;
})

let forDogs = foodstuff.filter('dog');

forDogs.forEach((item, index, forDogs) => {
  let img = document.createElement(`imgDogFood${index}`);
  img.setAttribute('src', item[index].image);
  let name = document.getElementById(`nameDogFood${index}`);
  name.textContent = item[index].name;
  let price = document.getElementById(`priceDogFood${index}`);
  price.textContent = item[index].price;
})
