// JavaScript Document



var questions = [
	['How many moons does Earth have?', 1],
	['How many moons does Saturn have?', 31],
	['How many moons does Venus have?', 0]
];

var message = document.getElementById("message"); 
var score = 0;

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

	if (number1 === questions[0][1]) {

		alert('Correct!' );
		score++;
	


	} else {

		alert('Sorry the correct awnser is: ' + questions[0][1]);
	}

	
	
	
	let number2 = parseInt(prompt(questions[1][0], '')); //1 = saturn array  0=question if i want to output awnser 31 it would be [1][1]
	
	if (number2 === questions[1][1]) {

		alert('Correct! You are sooo good!');
				score++;


	} else {

		alert('Sorry the correct awnser is: '+  questions[1][1]);

	}
	
	
	
	

	let number3 = parseInt(prompt(questions[2][0], '')); //2= Venus array 0=question
	//parse allows us to pass a string.
	
		if (number3 === questions[2][1]) {

		alert('Correct' );
					score++;




	} else {

		alert('Sorry the correct awnser is: '+ questions[2][1]);

	}
	
	

	message.innerHTML = 'Your result is ' + score +  'out of ' + questions.length + '!';

}

userInput();


