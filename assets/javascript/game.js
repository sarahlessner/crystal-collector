

var crystalImgArray = ["assets/images/crystalbutton2.png", "assets/images/crystalbutton1.png", "assets/images/crystalbutton3.png", "assets/images/crystalbutton4.png"]

var wins = 0;
var losses = 0;
var guessNumber = 0;
var userTotal = 0;

initRound();


function initRound() {
	//generate and display random number and user total
	guessNumber = Math.round(Math.random() * 101) + 19;
	$("#number-to-guess").text(guessNumber);	
	userTotal = 0;
	$("#total-score").text(userTotal);
	//generate crystals with random number user will click to add to total score
	for (i = 0; i < crystalImgArray.length; i++) {
	var crystalImg = $("<img>");
	crystalImg.addClass("crystal-image");
	crystalImg.attr("src", crystalImgArray[i]);
	crystalImg.attr("data-crystalvalue", Math.round(Math.random()* 11) + 1);
	$("#crystals").append(crystalImg);

	};

	$(".crystal-image").on("click", clickCrystal);	
};


function clickCrystal() {
	//this is here for the first click of a new game to clear win/loss message
	$("#win-loss-stat").text("");
	//take the rando number for the crystals and create variable to store as integer
	//increment user total by the value of the crystal clicked
	var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    userTotal += crystalValue;
    $("#total-score").text(userTotal);

    //win condition + initialize a new round
    if (userTotal === guessNumber) {
    	$("#win-loss-stat").text("You Win!");
    	wins ++;
    	$("#wins").text(wins);
    	$("#crystals").empty();
    	initRound();
    }
    //loss condition + initialize a new round
    else if (userTotal >= guessNumber) {
    	$("#win-loss-stat").text("You Lose!");
    	losses++;
    	$("#losses").text(losses);
    	$("#crystals").empty();
    	initRound();
    }

};







