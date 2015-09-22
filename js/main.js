// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});



//computer moves logic
function computerMove () {
  ///get a random option
  //get random index
  var options = ["rock", "paper", "scissors"];
  var compMove = [];
  var randomIndex = Math.floor(Math.random()*(2 - 0 + 1) *1);

  compMove.push(options[randomIndex]);

  return compMove[0];
}




//player move logic




//win logic

//if rock vs. scissors, rock wins
//if rock vs. paper, paper wins
//if scissors vs. paper, scissors wins
function winLogic (move1, move2) {
  if ( move1 === "rock" && move2 === "scissors") {
    return ("rock");
  } else if ( move2 === "rock" && move1 === "scissors") {
    return ("rock");
  } else if (move1 === "rock" && move2 === "paper") {
    return ("paper");
  } else if (move2 === "rock" && move1 === "paper") {
    return ("paper");
  } else if (move1 === "scissors" && move2 === "paper") {
    return ("scissors");
  } else if (move2 === "scissors" && move1 === "paper") {
    return ("scissors");
  } else {
    return ("tie");
  }

}

//update score function




