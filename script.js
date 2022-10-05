//My Questions, Options, and Answers
let questionOptions = [
    {
        question: 'What is at the end of a rainbow?',
        option: ['The letter Q', 'The letter W', 'The letter H', 'The letter S'],
        answer: 'The letter W'
    },
    {
        question: 'What word becomes shorter when you add two letters to it?',
        option: ['shorter', 'long', 'short', 'wide'],
        answer: 'shorter'
    },
    {
        question: 'What occurs once in a minute, twice in a moment and never in one thousand years?',
        option: ['The letter M', 'The letter P', 'The letter T', 'The letter P'],
        answer: 'The letter M'
    },
    {
        question: 'If I have it, I dont share it. If I share it, I dont have it. What is it?',
        option: ['A whisper', 'A paper', 'A secret', 'A car'],
        answer: 'A secret'
    }
];


let questionNumber = 0;


// This is my timer

let timeLeft = 60;
function countdown() {
    let timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            document.getElementById('countdown').textContent = timeLeft;
            timeLeft--;
        }
        else {
            document.getElementById('countdown').textContent = " ";
            clearInterval(timeInterval);
            gameOver();
        }

    }, 1000)
}


function quizGame() {
    document.querySelector('.container').style.visibility = 'visible';
    document.getElementById('question').textContent = questionOptions[questionNumber].question;

    document.getElementById('myButton1').value = questionOptions[questionNumber].option[0]
    document.getElementById('myButton2').value = questionOptions[questionNumber].option[1]
    document.getElementById('myButton3').value = questionOptions[questionNumber].option[2]
    document.getElementById('myButton4').value = questionOptions[questionNumber].option[3]
    countdown();
}

//to start the game 
document.getElementById('start').addEventListener('click', () => {
    quizGame();
   
})

// Running through my buttons

document.getElementById('myButton1').addEventListener('click', () => {
    if (questionOptions[questionNumber].option[0] === questionOptions[questionNumber].answer) {
        //run through this if statement if you complete the last question; this will make the container disappear and will call on the gameOver method;
        ;
        if (questionNumber == (questionOptions.length - 1)) {
            document.getElementById('userChoice').innerHTML = " ";
            document.querySelector('.container').style.display = 'none';
            
            return;
        }
        nextQuestion();
    }
    else {
        timeLeft -= 5;
        document.getElementById('userChoicer').innerHTML = "Oops, try again!"
    }

})
document.getElementById('myButton2').addEventListener('click', () => {
    if (questionOptions[questionNumber].option[1] === questionOptions[questionNumber].answer) {

        if (questionNumber == (questionOptions.length - 1)) {
            document.getElementById('userChoice').innerHTML = " ";
            document.querySelector('.container').style.display = 'none';
           
            return;
        }
        nextQuestion();
    }
    else {
        timeLeft -= 5;
        document.getElementById('userChoice').innerHTML = "Oops, try again!"
    }

})
document.getElementById('myButton3').addEventListener('click', () => {
    if (questionOptions[questionNumber].option[2] === questionOptions[questionNumber].answer) {

        if (questionNumber == (questionOptions.length - 1)) {
            document.getElementById('userChoice').innerHTML = " ";
            document.querySelector('.container').style.display = 'none';
          
            return;
        }
        nextQuestion();
    }
    else {
        timeLeft -= 5;
        document.getElementById('userChoice').innerHTML = "Oops, try again!"
    }

})
document.getElementById('myButton4').addEventListener('click', () => {
    if (questionOptions[questionNumber].option[3] === questionOptions[questionNumber].answer) {

        if (questionNumber == (questionOptions.length - 1)) {
            document.getElementById('userChoice').innerHTML = " ";
            document.querySelector('.container').style.display = 'none';
            return;
        }
        nextQuestion();
    }
    else {
        timeLeft -= 5;
        document.getElementById('userChoice').innerHTML = "Oops, try again!"
    }

})

// function for the next question
function nextQuestion() {
    document.getElementById('userChoice').innerHTML = " ";
    questionNumber++;

    document.getElementById('myButton1').value = questionOptions[questionNumber].option[0];
    document.getElementById('myButton2').value = questionOptions[questionNumber].option[1];
    document.getElementById('myButton3').value = questionOptions[questionNumber].option[2];
    document.getElementById('myButton4').value = questionOptions[questionNumber].option[3];
}

