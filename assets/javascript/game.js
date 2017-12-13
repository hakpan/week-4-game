//alert("test");

//Global Variables
//---------------------------

	//Gems
var gems = {
	gem1:
	{
		name: "gem1",
		value: 0
	},
	gem2:
	{
		name: "gem2",
		value: 0
	},	
	gem3:
	{
		name: "gem3",
		value: 0
	},
	gem4:
	{
		name: "gem4",
		value: 0
	},
};

	//Counters
	var winsCounter 	= 0;
	var losesCounter 	= 0;

	//Score
	var targetScore = 0;
	var yourScore 	= 0;


//Functions
//---------------------------

//Global Random Function for Gems & targetScore
var getRandom = function(min, max)	{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//What to do at the Start of the game
var startGame = function() {
	
	//Reset score
	yourScore = 0;

	//Set new random targetScore
	targetScore = getRandom(15, 100);

	//Update random Gem values
	gems.gem1.value 	= getRandom(1, 20);
	gems.gem2.value 	= getRandom(1, 20);
	gems.gem3.value 	= getRandom(1, 20);
	gems.gem4.value 	= getRandom(1, 20);

	//Put in the gemScore and yourScore into html
	$("#score").html(yourScore);
	$("#gemScore").html(targetScore);

	//Testing
	console.log("----------");
	console.log("Target Score: " + targetScore);
	console.log("gem1: " + gems.gem1.value);
	console.log("----------");

}
startGame();

//Adds the values of the gems under "your total score is:"
var addValues = function(gems) {

	//updating score
	yourScore = yourScore + gems.value;
	console.log("Your Score " + yourScore);

	//update the score section with yourScore
	$("#score").html(yourScore);

	//compare checkScore function with yourScore
	checkScore();
}

//Compare yourScore to targetScore and restart the game
var checkScore = function() {
	
	if (yourScore > targetScore) {
		alert("Womp, womp. You lose.");	
		//increase loss counter by 1 if statement is true
		losesCounter++;
		//Show score in html page
		$("#loses").html(losesCounter);
		//Restart Game after lose
		startGame();

	} else if (yourScore === targetScore) {
		alert("You Won!");
		//increase win counter by 1 if statement is true
		winsCounter++;
		//Show score in html page
		$("#win").html(winsCounter);
		//Restart Game after win
		startGame();
	}
}

//Main Process
//---------------------------

//onclick functions for gems
$('#gem1').click(function() {
	//alert("Test Gem1");
	addValues(gems.gem1);
});

$('#gem2').click(function() {
	//alert("Test Gem2");
	addValues(gems.gem2);
});

$('#gem3').click(function() {
	//alert("Test Gem3");
	addValues(gems.gem3);
});

$('#gem4').click(function() {
	//alert("Test Gem4");
	addValues(gems.gem4);
});