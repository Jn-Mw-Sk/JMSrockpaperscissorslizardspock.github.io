var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("userscore");
var compScore_span = document.getElementById("computerscore");
var scores_div = document.querySelector(".Scores");
var result_div = document.querySelector(".result");
var result_p = document.querySelector(".result p");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissor_div = document.getElementById("scissors");
var lizard_div = document.getElementById("lizard");
var spock_div = document.getElementById("spock");
var announcer = document.getElementById("announcer");

// Game Code
function getCompChoice(){
    var choices = ["rock", "paper", "scissors", "lizard", "spock"];
    var index = Math.floor(Math.random()*5);
    return choices[index];
  }

function game(userChoice){
    if(userScore < 10 && computerScore < 10)
    {
        var compChoice = getCompChoice();

        switch(userChoice + compChoice){
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
            case "paperspock":
            case "spockrock":
            case "lizardspock":
            case "spockscissors":
            case "rocklizard":
            case "scissorslizard":
            case "lizardpaper":
                win(userChoice, compChoice);
                break;
            case "scissorsrock":
            case "rockpaper":
            case "paperscissors":
            case "spockpaper":
            case "rockspock":
            case "spocklizard":
            case "scissorsspock":
            case "lizardrock":
            case "lizardscissors":
            case "paperlizard":
                lose(userChoice, compChoice);
                break;
            case "scissorsscissors":
            case "paperpaper":
            case "rockrock":
            case "lizardlizard":
            case "spockspock":
                draw();
                break;
    }
    }
    

}

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    if(userChoice === "rock"){
        if(compChoice === "scissors")
        {
            result_p.innerHTML= "Rock crushes Scissors! You Win!";
        }
        if(compChoice === "lizard")
        {
            result_p.innerHTML = "Rock crushes Lizard! You win!";
        }
    }
    if(userChoice === "paper"){
        if(compChoice === "rock")
        {
            result_p.innerHTML = "Paper covers Rock! You Win!";
        }
        if(compChoice === "spock")
        {
            result_p.innerHTML = "Paper disproves Spock! You Win!";
        }
    }
    if(userChoice === "scissors"){
        if(compChoice === "paper")
        {
            result_p.innerHTML= "Scissors cuts Paper! You Win!";
        }
        if(compChoice === "lizard")
        {
            result_p.innerHTML = "Scissors decapitates Lizard! You Win!";
        }
    }
    if(userChoice === "lizard"){
        if(compChoice === "paper")
        {
            result_p.innerHTML = "Lizard eats Paper! You Win!";
        }
        if(compChoice === "spock")
        {
            result_p.innerHTML = "Lizard poisons Spock! You Win!";
        }
    }
    if(userChoice === "spock"){
        if(compChoice === "rock")
        {
            result_p.innerHTML = "Spock vaporizes Rock! You Win!";
        }
        if(compChoice === "scissors");
        {
            result_p.innerHTML = "Spock smashes Scissors! You Win!";
        }
    }
    checkScores();
}

function lose(userChoice, compChoice){
    computerScore++;
    compScore_span.innerHTML = computerScore;
    if(compChoice === "rock"){
        if(userChoice === "scissors")
        {
            result_p.innerHTML= "Rock crushes Scissors! You Lose!";
        }
        if(userChoice === "lizard")
        {
            result_p.innerHTML = "Rock crushes Lizard! You Lose!!";
        }
    }
    if(compChoice === "paper"){
        if(userChoice === "rock")
        {
            result_p.innerHTML = "Paper covers Rock! You Lose!";
        }
        if(userChoice === "spock")
        {
            result_p.innerHTML = "Paper disproves Spock! You Lose!";
        }
    }
    if(compChoice === "scissors"){
        if(userChoice === "paper")
        {
            result_p.innerHTML= "Scissors cuts Paper! You Lose!";
        }
        if(userChoice === "lizard")
        {
            result_p.innerHTML = "Scissors decapitates Lizard! You Lose!";
        }
    }
    if(compChoice === "lizard"){
        if(userChoice === "paper")
        {
            result_p.innerHTML = "Lizard eats Paper! You Lose!";
        }
        if(userChoice === "spock")
        {
            result_p.innerHTML = "Lizard poisons Spock! You Lose!";
        }
    }
    if(compChoice === "spock"){
        if(userChoice === "rock")
        {
            result_p.innerHTML = "Spock vaporizes Rock! You Lose!";
        }
        if(userChoice === "scissors")
        {
            result_p.innerHTML = "Spock smashes Scissors! You Lose!";
        }
    }
    checkScores();
}

function draw(){
    result_p.innerHTML = "This is a draw! Choose again!"
}

function checkScores(){

    if(userScore == 10)
    {
        announcer.innerHTML = "User has reached 10 points! User wins!";
        result_p.innerHTML = "The game is over!"
        return;
    }
    if(computerScore == 10)
    {
        announcer.innerHTML = "Computer has reached 10 points! Computer Wins!"
        result_p.innerHTML = "The game is over!"
        return;
    }
    if(userScore > computerScore )
    {
        announcer.innerHTML = "User has the lead!"
    }
    if((computerScore > userScore))
    {
        announcer.innerHTML = "Computer has the lead!"
    }
    if(userScore == computerScore){
        announcer.innerHTML = "User and computer are neck and neck!"
    }
    if(computerScore == 9 && userScore == 9)
    {
        announcer.innerHTML = "This is it, the deciding play!"
    }
}

var f1 = function() {game("rock");}
var f2 = function() {game("paper");}
var f3 = function() {game("scissors");}
var f4 = function() {game("lizard");}
var f5 = function() {game("spock");}

rock_div.addEventListener("click", f1);
paper_div.addEventListener("click", f2);
scissor_div.addEventListener("click", f3);
lizard_div.addEventListener("click", f4);
spock_div.addEventListener("click", f5);

