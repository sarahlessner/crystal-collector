

var crystalImgArray = ["assets/images/crystalbutton2.png", "assets/images/crystalbutton1.png", "assets/images/crystalbutton3.png", "assets/images/crystalbutton4.png"]

var wins = 0;
var losses = 0;
var guessNumber = 0;
var userTotal = 0;


for (i = 0; i < crystalImgArray.length; i++) {
	var crystalImg = $("<img>");
	crystalImg.addClass("crystal-image");
	crystalImg.attr("src", crystalImgArray[i]);
	crystalImg.attr("data-crystalvalue", Math.round(Math.random()* 12) + 1);
	var myID = "crystalName" + i;
	crystalImg.attr("id", myID);
	$("#crystals").append(crystalImg);

};

initRound();

function initRound() {
	
	guessNumber = Math.round(Math.random() * 101) + 19;
	$("#number-to-guess").text(guessNumber);	
	userTotal = 0;
	$("#total-score").text(userTotal);

	//var crystalImages = $(".crystal-image");
	for (i = 0; i < crystalImgArray.length; i++) {
		var myID = "#crystalName" + i;
		$(myID).attr("data-crystalvalue", Math.round(Math.random()* 12) + 1);;	
	}
};

$(".crystal-image").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userTotal += crystalValue;
    $("#total-score").text(userTotal);

    	
    if (userTotal === guessNumber) {
    	$("#win-loss-stat").text("You Win!");
    	wins ++;
    	$("#wins").text(wins);
    	initRound();
    }

    else if (userTotal >= guessNumber) {
    	$("#win-loss-stat").text("You Lose!");
    	losses++;
    	$("#losses").text(losses);
    	initRound();
    }

});





//create click function for crystals that adds the current random number
// assigned to the crystal to the tally of user guesses

//if the variable storing the user guess tally is equal to the random number to match
// the user wins. if the variable... is greater then the user loses
	// change set variable for win/loss message to true or false for each of those conditions
	//along with that update either the win or loss tally - insert into HTML w juery



