$(document).ready(function(){
 
  var answers = ["Sister Mary Keneth Keller","Ada Lovelace",
"Kimberly Bryant","Hedy Lamarr", "Zoe Quinn", "Rachel E. Walker", "Eliana Murillo","Jennifer Argüello","Tracy Chou", "Ruchi Sanghvi", "Grace Hoper",
"Anita Borg"]; 

  var player1 = 0;
  var player2  = 0;
  var player1Choice;
  var player2Choice;
  var turnCounter = 1;


  $(".button").on( "click", function() {
    console.log($(this).parent().index(), $(this).text());
    var parentIndex = $(this).parent().index();
    var answer = $(this).text();
    console.log(answers[parentIndex]=== answer);
    
      if(turnCounter % 2 === 0){
      if(answers[parentIndex]=== answer){
        player1 +=1;
        getWinner();
        updateScoreBoard();
        turnCounter +=1;
      } else {
        console.log(answers[parentIndex]=== answer);
        turnCounter +=1;
      }
    }else {
      if(answers[parentIndex]=== answer){
        player2 +=1;
        updateScoreBoard();
        turnCounter +=1;
        getWinner();
      } else {
       console.log(answers[parentIndex]=== answer);
      turnCounter +=1;
      }
    }
  
  });


function updateScoreBoard() {
  $('#player1Score').text(player1);
  $('#player2Score').text(player2);
}


function getWinner(){
  if(player1 ===5){
    alert("player 1 won!");

  } else if (player2 ===5){
    alert("player 2 won!");

  } else {
    console.log("Nobody won. Try again.")
    }
  }

});




//sudo code

  //Create your html and basic CSS
    //Create a container to hold your grid 
    // You need a container to explain the game.
    // You need a container to hold player 1 and player 2 
    //You need to create a grid of 4x3.
    // Inside the grid you need to add buttons for three choices.
    //Add some basic styling to your board so that there is a basic alignmnent.

  //Game Logic mvp

  // Start the Game
    //Please enter Player 1 name
    //Please enter Player 2 name
    //Randomly assign one of the players to begin the game. 

  // Storing the answers
    //When you select the right answer for one box, give player 1 a point. If the answer is wrong, you cannot select that box again. (Ideally it would be amazing if when you select the right answer, the box flipped over, and revealed a small message of why that lady is awesome.)       

  // Determining a winner
    // If player 1 wins alert: Player 1 is the winner
    //If player 2 wins alert: Player 2 is the winner.
    // If nobody gets the right answer alert: you are terrible at this trivia. Would you like to play again?

  //Reset Button: Called Play again.     



