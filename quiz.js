// JavaScript Document



var questions = [
	['How many moons does Earth have?', 1],
	['How many moons does Saturn have?', 31],
	['How many moons does Venus have?', 0]
];

/****************************
	
Create a quiz based on the array "questions" ['question', correct answer].
Each question must be presented using the prompt() method, allow user input and provide feedback using alert() - either "Correct!" or "Sorry. The correct answer is [correct number].)
	
After the quiz is finished the overall result is published: "You got [number of correct answered questions] out of [questions in total] questions correct!"
	
Additional challenge: 
Use the JSON file 01_quiz.json as data source instead of the default array.
	
****************************/

function userInput() {
	'use strict';
	let number1 = parseInt(prompt(questions[0][0], '')); //0 =earth array  0=question
	let number2 = parseInt(prompt(questions[1][0], '')); //1 = saturn array  0=question if i want to output awnser 31 it would be [1][1]
 	let number3 = parseInt(prompt(questions[2][0], '')); //2= Venus array 0=question
     //parse allows us to pass a string.
	let result = number1 + number2 + number3;  //here is the result 
	output.innerHTML = 'Your result is ' + result + '!';

}

userInput();


