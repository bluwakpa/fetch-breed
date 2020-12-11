'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => {
      console.log(error);
      alert('Something went wrong. Try again later.')
    });
}

function displayResults(responseJson) {
  console.log(responseJson);
  let html = '';
      if (responseJson.code === 404) {
        let breedOfDog = $('input[type="test"]').val();
          html += `Sorry, the ${breedOfDog} dog breed does not exist in the database!<br>
          <img src="https://beingcricky.com/wp-content/uploads/2020/07/1595625158095.jpg" alt="sad pup"><br>
          Maybe try these dog breeds:
          <ul>
            <li>african</li>
            <li>chihuahua</li>
            <li>husky</li>
          </ul>`;
          console.log("Pick a new dog breed please!");
      } else {
        $('.results h2').html(`Here is a picture of a ${breedOfDog}:`);
            html += `<img src="${responseJson.message}" />`
      }
    
      $('.results').html(html)
      //replace the existing image with the new one
      //display the results section
      $('.results').removeClass('hidden');
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage($('#breed').val());
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});