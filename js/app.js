$(document).ready(function(){

//buttons are hidden on mouseover buttons appear, on mouseleave buttons disappear.
  $(".card").on("mouseover", function() {
    $(this).children().children().children().removeClass("hidden");
  })

  $(".card").on("mouseleave", function() {
    $(this).children().children().children().addClass("hidden");
  })

  var answers = ["Sister Mary Keneth Keller","Ada Lovelace","Kimberly Bryant","Hedy Lamarr", "Zoe Quinn", "Rachel E. Walker", "Eliana Murillo","Jennifer Argüello","Tracy Chou", "Ruchi Sanghvi", "Grace Hoper","Anita Borg"];
  var player1 = 0;
  var player2  = 0;
  var player1Choice;
  var player2Choice;
  var turnCounter = 1;


  $(".button").on( "click", function() {
    console.log($(this).parent().index(), $(this).text());
    var parentIndex = $(this).parents('.cell').index();
    var answer = $(this).text();
    console.log(answers[parentIndex]=== answer);

    if(turnCounter % 2 === 0){
      if(answers[parentIndex]=== answer){
        player1 +=1;
        getWinner();
        updateScoreBoard();
        turnCounter +=1;

        $(this).parents('.card').addClass("flipped")
        console.log($(this));

      } else {
        console.log(answers[parentIndex]=== answer);
        turnCounter +=1;
        }
      } else {
        if(answers[parentIndex]=== answer){
        player2 +=1;
        updateScoreBoard();
        turnCounter +=1;
        getWinner();
        $(this).parents('.card').addClass("flipped")
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
  if(player1 ===3){

  $("#winner").text("Player 1 is the winner, congrats!");
    // alert("player 1 won!");

  } else if (player2 ===3){
    $("#winner").text("Player 2 is the winner, congrats!");
    // alert("player 2 won!");

  } else {
    $("#winner").text("Keep playing, nobody has won yet.")
    // console.log("Nobody won. Try again.")
    }
  }
});
