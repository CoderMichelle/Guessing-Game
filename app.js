'use strict'
//Get data from the user - question 1

function greeting() {
  var userName = prompt('What is your name?');
  var response1 = 'Hello and Welcome to the Guessing Game about Michelle, ';
  // display data to the user
  alert(response1 + userName);

  console.log('The users name is ' + userName);
}

// question 2

function location() {
  var city = prompt('Does Michelle live in Seattle, WA?');
  var city = city.toLowerCase()
  console.log(city)
  if ((city == 'yes') || (city == 'y')) {
    alert('No, that is incorrect, she lives in Olympia');
  } else {
    alert('Yes, you are correct');
  }
}

// question 3

function cat() {
  var pet = prompt('Does Michelle have a pet? Please answer Yes or No');
  var pet = pet.toLowerCase();
  console.log('Does Michelle have a pet ?' + pet);
  if ((pet == 'yes') || (pet == 'y')) {
    alert('Yes, that is true')
  } else {
    alert('No, that is incorrect, Michelle does have a pet cat named \'Annabelle.\'!');
  }
}

// question 4

function born() {
  var origin = prompt('Is Michelle from WA? Please answer Yes or No');
  var origin = origin.toLowerCase();
  console.log('Is Michelle from WA' + origin);
  if ((origin == 'no') || (origin == 'n')) {
    alert('Yes, you are correct')
  } else {
    alert('No, Michelle is not originally from WA');
  }
}

// question 5

function education() {
  var college = prompt('Does Michelle have a college degree?');
  var college = college.toLowerCase();
  console.log('Does Michelle have a college degree' + college)
  if ((college == 'yes') || (college == 'y')) {
    alert('Yes, you are correct.');
  } else {
    alert('No, actually Michelle does have a Bachelors Degree from The Evergreen State College');
  }
}

// question 6

function secret() {
  var correctNumber = 5;
  for (var i = 0; i < 4; i++) {
    var Q6 = prompt('Guess a number between 1 and 10');
    if (Q6 < correctNumber) {
      alert('too low, try again');
    } else if (Q6 > correctNumber) {
      alert('too high, try again');
    } else if (Q6 == correctNumber) {
      alert('YAY, YOU GOT IT RIGHT!');
      break;
    }
  }
}

// question 7

function vacation() {
  var place = ['Egypt', 'Dubai', 'South Africa', 'New Zealand', 'Scotland', 'Morocco', 'Hungary', 'India', 'Viet Nam', 'Indonesia',];
  var arrayofAnswers = [];
  var correctAnswer2 = 0;
  var counter = 0;
  for (var i = 0; i < 6; i++) {
    var answer = prompt('Guess Michelles top country to go see');
    var counter = arrayofAnswers.length;
    for (var a = 0; a < place.length; a++) {
      if (answer == place[a]) {
        correctAnswer2 = correctAnswer2 + 1;
        arrayofAnswers.push(answer);
      } else {
        console.log('incorrect');
      }
    }
    if (arrayofAnswers.length > counter) {
      alert('You are correct. Michelle likes to go to ' + answer);
    } else {
      alert('Incorrect, Michelle did not put on the list to go to ' + answer);
    }
    console.log(arrayofAnswers.length + ' correct answers');
  }

  alert('Congratulations! you got ' + arrayofAnswers.length + ' correct countries.');
  var countryString = '';
  for (i = 0; i < arrayofAnswers.length; i++) {
    countryString = countryString + arrayofAnswers[i] + ', ';
  }
  alert(countryString + 'Thanks for visiting my website, ' + userName + '!');
}

greeting()
location()
cat()
born()
education()
secret()
vacation()