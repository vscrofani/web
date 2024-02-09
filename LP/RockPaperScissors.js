const varArray = ["rock","paper","scissors"];

//Retrieves random choice for computer  
function getComputerChoice(varArray){
    return varArray[Math.floor(Math.random() * varArray.length)];
}

//Retrieves choice from user
function getPlayerChoice(){  
	let choice = prompt("Rock, Paper or Scissors?");
    choice = choice.toLowerCase();
    if(choice == "rock" || choice == "paper" || choice == "scissors"){
    	return(choice);
    }
    else{
    	return(0);
    }
    
}

//Takes values given from user and computer and determines return value
function playRound(getPlayerChoice,getComputerChoice){
	
    if(getPlayerChoice == "rock" && getComputerChoice == "paper"){
    	return("Paper beats rock, computer wins!");
    }
	else if(getPlayerChoice == "rock" && getComputerChoice == "scissors"){
        return("Rock beats Scissors, you win!");
    }
    else if(getPlayerChoice == "rock" && getComputerChoice == "rock"){
        return("Tie!");
    }
    else if(getPlayerChoice == "paper" && getComputerChoice == "rock"){
        return("Paper beats Rock, you win!");
    }
    else if(getPlayerChoice == "paper" && getComputerChoice == "scissors"){
        return("Scissors beats Paper, computer wins!");
    }
    else if(getPlayerChoice == "paper" && getComputerChoice == "paper"){
        return("Tie!");
    }
    else if(getPlayerChoice == "scissors" && getComputerChoice == "paper"){
        return("Scissors beats Paper, you win!");
    }
    else if(getPlayerChoice == "scissors" && getComputerChoice == "rock"){
        return("Rock beats Scissors, computer wins!");
    }
     else if(getPlayerChoice == "scissors" && getComputerChoice == "scissors"){
        return("Tie!");
    }
    else{
    	return("Not valid answer");
    }
}

//Loops through 5 rounds and counts wins (win counter should be made into separate function)
function playGame(){
	let userWins=0;
    let compWins=0;
	var playerChoice;
	var compChoice;
    for(x=0;x<5;x++){
    	playerChoice = getPlayerChoice();
        console.log(playerChoice);
        compChoice = getComputerChoice(varArray);
		console.log(compChoice);

    //Code below is to try and track the win count.
    let countValue = playRound(playerChoice,compChoice);
    alert(countValue);
    console.log(countValue);
        
        if(countValue == "Paper beats rock, computer wins!"){
        	compWins++;
        }
        else if(countValue == "Rock beats Scissors, you win!"){
        	userWins++;
        }
         else if(countValue == "Paper beats Rock, you win!"){
        	userWins++;
        }
         else if(countValue == "Scissors beats Paper, computer wins!"){
        	compWins++;
        }
         else if(countValue == "Scissors beats Paper, you win!"){
        	userWins++;
        }
        else if(countValue == "Rock beats Scissors, computer wins!"){
        	compWins++;
        }        
    }
    
    //print results
	alert("The final score is You: " + userWins + " Computer: " + compWins);

}

alert(playGame());