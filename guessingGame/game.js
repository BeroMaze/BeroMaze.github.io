// right is to count how many answers the user gets right
var right = 0;
//numGuess is how many trys it takes the user to guess the number
var numGuess = 0;
// array of yes answer results
var yesResp = [
  "Nope, sorry I was really born in Denver, Colorado.",
  "That's correct, all black everything.",
  "That's correct, together they weight 121 pounds.",
  "Sorry Indie is not really my thing."
];
// array of no answer results
var noResp = [
  "You are correct, I was really born in Denver, Colorado.",
  "Sorry, but it is. There is a custom finish on it.",
  "Sorry, but it True. Together they weight 121 pounds.",
  "Thats right. Indie really isnt for me."
];

//array for image yes and no
//function to count yes's
var userYes = function(resp, face, button) {
      if ((resp.toUpperCase() === "YES") || (resp.toUpperCase() === "Y"))  {
        right++;
        var smile = document.getElementById(face).src = 'smileface.jpg';
        document.getElementById(button).readOnly = true;
      }
      else {
        var smile = document.getElementById(face).src = 'cryface.jpg';
        document.getElementById(button).readOnly = true;
      }
    }
//function to count no's
var userNo = function(resp, face, button){
      if ((resp.toUpperCase() === "N") || (resp.toUpperCase() === "NO")) {
        right++;
        var smile = document.getElementById(face).src = 'smileface.jpg';
        document.getElementById(button).readOnly = true;
      }
      else {
      var smile = document.getElementById(face).src = 'cryface.jpg';
      document.getElementById(button).readOnly = true;
    }
}
// function for user input for the questions
var userInput = function(resp, answer, yesR, noR) {
  if ((resp.toUpperCase() === "YES") || (resp.toUpperCase() === "Y")) {
    var question = document.getElementById(answer).innerHTML = yesR;
  }
 else {
    var question = document.getElementById(answer).innerHTML = noR;
 }
}


//function for the numbers guesssing game
  var numGame = function() {
    var number = Math.floor(Math.random() * 5) + 1;
      var qu5 = prompt("Lets play a little side game. This one is between you and the computer. Guess a number 1-5");
        while (Number(qu5) === 0) {

          qu5 = prompt("You did not enter a number. Please Enter a Number that is between 1-5.");
        }
        while ((Number(qu5) < 1) || (Number(qu5) > 5)) {
          qu5 = prompt("Sorry, but that number does not fall inbetween 1-5. Please guess again.");
        }
        while (Number(qu5) < number) {
          qu5 = prompt("Thats a Little Low. Guess again.");
          numGuess++;
        }
        while (Number(qu5) > number) {
          qu5 = prompt("thats a Little high. Guess again.");
          numGuess++;
        }
        while (Number(qu5) === number) {
          document.getElementById('answer5').innerHTML = "Great Job. " + number + " was the right number.";
          numGuess++;
          document.getElementById('qu5').disabled = true;
          break;
        }
  }
// Results of user guessing game
var numResults = function() {
      if (Number(numGuess) === 1) {
        document.getElementById("numRus").innerHTML = "Great Job One guess. Thats inpressive!!!".fontcolor('green') ;
      }
      else if (Number(numGuess) === 2) {
        document.getElementById("numRus").innerHTML = "Not bad. 2 guess is pretting good.".fontcolor('green') ;
      }
      else if (Number(numGuess) === 3) {
        document.getElementById("numRus").innerHTML = "3 guesses, 60% isn't the worst.".fontcolor('red') ;
      }
      else {
        document.getElementById("numRus").innerHTML = "The computer really got you this time.".fontcolor('red');
      }
}

//question 1
var questionB1 = function() {
        // var qu1 =  prompt("Was I born in Wisconsin?");
      var qu1 = document.getElementById("qu1").value;
      userInput (qu1, "answer1", yesResp[0].fontcolor('red'), noResp[0].fontcolor('green'));
        userNo(qu1, 'face1', 'qu1');
}

//question 2
var questionB2 = function(){
      // var qu2 = prompt("Is the color of my car Matte Black?");
        var qu2 = document.getElementById("qu2").value;
        userInput(qu2, "answer2", yesResp[1].fontcolor('green'), noResp[1].fontcolor('red'));
        userYes(qu2, 'face2', 'qu2');
}

//question 3
var questionB3 = function(){
      // var qu3 = prompt("Is the weight of both my dogs added together over 120 pounds?");
        var qu3 = document.getElementById("qu3").value;
        userInput(qu3, 'answer3', yesResp[2].fontcolor('green'), noResp[2].fontcolor('red'));
        userYes(qu3, 'face3', 'qu3');
}

//question 4
var questionB4 = function(){
      // var qu4 = prompt("This next question contains some music thought. Is one of the styles of music that I like called Indie?");
        var qu4 = document.getElementById("qu4").value;
        userInput(qu4, "answer4", yesResp[3].fontcolor('red'), noResp[3].fontcolor('green'));
        userNo(qu4, 'face4', 'qu4');
}

//number guessing game
        var questionB5 = function() {
          numGame();
        }

var gameResults = function() {
//tells the user how they did
document.getElementById("outOf").innerHTML = "You got " + right + " out of 4.";
document.getElementById("numof").innerHTML = "It took you " + numGuess + " trys to guess the number.";

//tells the user how the did in the guessing game
numResults();
}


