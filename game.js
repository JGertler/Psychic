var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z"];

var userGuess = [];
var lossCount = [];
var winCount = 0;
var guessList = [];
var computerLetter = function () {
	alphabet[Math.floor(Math.random() * alphabet.length)];
	};
// var glisten = $(function () {
//         setInterval(function () {
//             $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
//             $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
//             $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
//             $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
//         }, 1);
//     });
 
var updateGuessesSoFar = function() {
	// guessList.push(userGuess);
	// guessList.toString();
	document.getElementById("guesses").innerHTML = guessList.join("   ,  ");
	}

console.log(computerLetter);

document.onkeyup = function(event) {

    if (event.key=="a" || event.key=="b" || event.key=="c" || 
      	event.key=="d" || event.key=="e" || event.key=="f" || 
      	event.key=="g" || event.key=="h" || event.key=="i" || 
      	event.key=="j" || event.key=="k" || event.key=="l" || 
      	event.key=="m" || event.key=="n" || event.key=="o" || 
      	event.key=="p" || event.key=="q" || event.key=="r" || 
      	event.key=="s" || event.key=="t" || event.key=="u" || 
      	event.key=="v" || event.key=="w" || event.key=="x" || 
      	event.key=="y" || event.key=="z") {
        var userGuess = event.key;
    	document.getElementById("letterGuess").innerHTML= userGuess;	
		guessList.push(userGuess);
		updateGuessesSoFar();
		}  

	if (userGuess==computerLetter) {
		winCount++;
		document.getElementById("wins").innerHTML = winCount;
		// glisten();
		reset();
		computerLetter ();

		
	} else {
		lossCount++;
		document.getElementById("losses").innerHTML = lossCount;
		reset == false;
	}
}



var reset = function() {
  computerLetter;
  guessList = [];
  updateGuessesSoFar();
}


