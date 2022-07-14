/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


const url = 'https://adoptme-sad.herokuapp.com/';
const pets = 'pets';
const products = 'products';
const users = 'users';
const shopping = 'shopping';


const getPets = async () => {
  try {
    const resp = await fetch(url + pets);
    const data = await resp.json()
    console.log(data);
    return data
  } catch (err) {
    throw err
  }
}

// const getPets = async (url) => {
//   fetch(url + pets)
//   .then( (resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     let petsData = data;
//     return petsData
//   })
// }


const getProducts = async () => {
  try {
    const resp = await fetch(url + products);
    const data = await resp.json()
    console.log(data);
    return data
  } catch (err) {
    throw err
  }
}


console.log(getPets());

export {
  getPets,
  getProducts
}
