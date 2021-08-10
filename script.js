const startButtonEl = document.getElementById('startButton')
const questionContainerEl = document.getElementById('questionContainer')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answerButtons')
const timerEl = document.getElementById('timer');
const scoresEl = document.getElementById('scores')
const rulesEl = document.getElementById('rules')

    var timeLeft = 60;
    var timerId; 
    var currentScore = 0

startButtonEl.addEventListener('click' , startGame)

    currentIndex = 0;

let questions = [
    {   question: 'What president served the shortest term at 32 days long?',
    choices: ['Warren G. Harding' , 'Chester A. Arthur' , 'James Polk' , 'William Henry Harrison'],
    correctAnswer: 'William Henry Harrison'
   }, 
{   question: 'How many million miles away is the sun?',
    choices: ['39' , '22' , '93' , '111'],
    correctAnswer: '93'
   }, 
{   question: 'What famous Beatle was also the narrator for Thomas the Tank?',
    choices: ['Paul McCartney' , 'John Lenon' , 'George Harrison' , 'Ringo Starr'],
    correctAnswer: 'Ringo Starr'
   }, 
{   question: 'In what language was Anne Frank\'s original diary first published?',
    choices: ['German' , 'French' , 'English' , 'Dutch'],
    correctAnswer: 'Dutch'
   }, 
{   question: 'In what country are all U.S. Major League baseballs currently manufactured?',
    choices: ['Costa Rica' , 'Haiti' , 'Dominican Republic' , 'Puerto Rico'],
    correctAnswer: '4'
   }, 
{   question: 'What insect shorted out an early supercomputer and inspired the term "computer bug"? ',
    choices: ['Beetle' , 'Fly' , 'Ant' , 'Moth'],
    correctAnswer: 'Moth'
   }, 
{   question: 'In the U.S., the Sony Walkman personal cassette player was originally marketed in 1979 under what name? ',
    choices: ['Soundabout' , 'Eardrummer' , 'Listener' , 'Stowaway'],
    correctAnswer: '4'
   }, 
{   question: 'What letter must appear on the beginning of the registration number of all non-military aircraft in the U.S.?',
    choices: ['N' , 'S' , 'T' , 'U'],
    correctAnswer: 'N'
   }, 
{   question: 'Suffolk Punch and Hackney are types of what?',
    choices: ['Carriages' , 'Horses' , 'Fighting styles' , 'Coctails'],
    correctAnswer: '4'
   }, 
{   question: 'Where would a "peruke" be worn?',
    choices: ['On the wrist' , 'Around the waist' , 'On the head' , 'Around the neck'],
    correctAnswer: 'On the head'
   }, 
{   question: 'What is the highest amount of points a player can score with a single throw in darts?',
    choices: ['20' , '40' , '60' , '80'],
    correctAnswer: '60'
   }, 
{   question: 'What is the rarest type of blood in the human body?',
    choices: ['AB negative' , 'O positive' , 'B negative' , 'A positive'],
    correctAnswer: 'AB negative'
   }, 
] 


function startGame(){
    startButtonEl.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    timerId = setInterval(timer, 1000)
    timerEl.textContent = timeLeft;
    nextQuestion();
}

function timer () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(timeLeft <=0){
        endQuiz();
    }
}



function nextQuestion(){
    // var randomNumber = Math.floor(Math.random() * currentIndex.length);
    var currentQuestion = questions[currentIndex];  

    questionEl.textContent = currentQuestion.question;
    answerButtonsEl.innerHTML = "";
    currentQuestion.choices.forEach( function (choice , i){
        var button = document.createElement('button')
        button.textContent = choice;
        button.setAttribute('value' , choice)
        button.onclick = checkAnswer
        answerButtonsEl.append(button)
    } )
}

function checkAnswer () {
    console.log(questions[currentIndex].correctAnswer)

    if(this.value !== questions[currentIndex].correctAnswer){ 
        timeLeft -= 5;
        timerEl.textContent = timeLeft;     
    } else {
     currentScore ++;
     timeLeft +=5   
}

    currentIndex ++;
    if(currentIndex === questions.length){
    endQuiz(); 
    } else{
    nextQuestion();
    }

}


function endQuiz(){
    clearInterval(timerId);
    questionContainerEl.classList.add('hide');
    scoresEl.classList.remove('hide') ;
    showScores();
}


//display high scores
function showScores(){
var scores = localStorage.getItem("scores");
localStorage.setItem("scores", timeLeft);
questionContainerEl.classList.add('hide');
scoresEl.classList.remove('hide');

}



//randomize questions , display high scores , input name.  how to add padding to answers buttons
//css cant manage to center box