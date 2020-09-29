<!DOCTYPE html>
<html>
<head>
	<title>Guess a number</title>
</head>
<body>
	<h1>Guess a number</h1>
	<p>Guess a number from 1 to 100</p>
	<input type="number" placeholder="Enter your number here" id="userNumber">
	<button onclick="buttonPressed()">Guess a number</button>
	<button onclick="resetGame()">Restart Game</button>
	<script type="text/javascript">
		var randomNumber = Math.ceil(Math.random() * 100);
		var chances = 5;
		function buttonPressed(){
			var userNumber = document.getElementById("userNumber").value;

			// DO the comparison here

			if (randomNumber > userNumber){
				chances--;
				if (chances > 0){
				alert("Number too small. Try again. "+chances +" chances remaining.");
			} else {
				alert("Game over. The number is "+randomNumber);
				resetGame()
			}

			}
			else if (randomNumber < userNumber){
				chances--;
				if (chances > 0){
				alert("Number too big. Try again. "+chances +" chances remaining.");
				}
				else {
					alert("Game over. The number is "+randomNumber);
					resetGame()
				}

			}
			else {
				alert("Congratulation you win.");
				resetGame();
			}
			document.getElementById("userNumber").value = ""

		}

		function resetGame(){
			randomNumber = Math.ceil(Math.random() * 100);
			chances = 5
			alert('A new number has been selected');
		}
	</script>
</body>
</html>
