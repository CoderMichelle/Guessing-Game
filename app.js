'use strict'
//Get data from the user
var userName = prompt('What is your name?');
var response1 = 'Hello and Welcome to the Guessing Game about Michelle, ';

// display data to the user
alert(response1 + userName);

console.log('The users name is ' + userName);

var city = prompt('Does Michelle live in Seattle, WA?');
var city = city.toLowerCase()
console.log(city)
if ((city == 'yes') || (city == 'y')) {
  alert('No, that is incorrect, she lives in Olympia');
} else {
  alert('Yes, you are correct');
}
var pet = prompt('Does Michelle have a pet? Please answer Yes or No');
var pet = pet.toLowerCase();
console.log('Does Michelle have a pet ?' + pet);
if ((pet == 'yes') || (pet == 'y')) {
  alert('Yes, that is true')
} else {
  alert('No, that is incorrect, Michelle does have a pet cat named \'Annabelle.\'!');
}

var origin = prompt('Is Michelle from WA? Please answer Yes or No');
var origin = origin.toLowerCase();
console.log('Is Michelle from WA' + origin);
if ((origin == 'no') || (origin == 'n')) {
  alert('Yes, you are correct')
} else {
  alert('No, Michelle is not originally from WA');
}

var college = prompt('Does Michelle have a college degree?');
var college = origin.toLowerCase();
console.log('Does Michelle have a college degree' + college)
if ((college == 'yes') || (college == 'y')) {
  alert('Yes, you are correct');
} else {
  alert('No, actually Michelle does have a Bachelors Degree from The Evergreen State College');
} blu
  ('Thanks for visiting my website, ' + userName + '!');