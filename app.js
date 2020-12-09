'use strict';

// const STORE = {
//     number: 0,
//     url: 
// };

function getDogImage(numberOfDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
    console.log(numberOfDogs + " dogs");
}

function displayResults(responseJson) {
  console.log(responseJson);
  let html = '';
  let num = $('input[type="number"]').val();
  for (let i=0; i<responseJson.message.length; i++) {
    html += `<img src="${responseJson.message[i]}" />`
  }
  $('.results-img').html(html)
  $('.results h2').html(`Now showing you ${num} pictures of dogs.`);
   //replace the existing image with the new one
//    $('.results-img').replaceWith(
//      `<img src="${html}" class="results-img">`
//    )
   //display the results section
   $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numberOfDogs = $('input[type="number"]').val()
    getDogImage(numberOfDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});