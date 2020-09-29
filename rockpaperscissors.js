<!DOCTYPE html>
<html>
<head>
	<title>Rock Paper Scissors</title>
</head>
<body>
	<h1>Rock Paper Scissors</h1>
	<p>Select a weapon:</p>
	<button onclick="rockClicked()">Rock</button><button onclick="paperClicked()">Paper</button><button onclick="scissorsClicked()">Scissors</button>

<script type="text/javascript">
	// Bring out an alert to your screen
	var userScore = 0;
	var computerScore = 0;

// User select 2
	function scissorsClicked(){
		var computerSelection = Math.floor(Math.random()*3)
		if (computerSelection == 0){
			computerScore ++;
			alert("Computer select rock. You lose. Computer: "+computerScore+ " User: "+
				userScore)
		}
		else if (computerSelection == 1){
			userScore ++
			alert("Computer select paper. You win. Computer: "+computerScore+ " User: "+
				userScore)
		}
		else {
			alert("Computer select scissors. Its a draw. Computer: "+computerScore+ " User: "+
				userScore)
		}
	}
	

// User select 0
	function rockClicked(){
		var computerSelection = Math.floor(Math.random()*3)
		if (computerSelection == 0){
			alert("Computer select rock. It's a draw. Computer: "+computerScore+ " User: "+
				userScore)
		}
		else if (computerSelection == 1){
			computerScore ++;
			alert("Computer select paper. You lose. Computer: "+computerScore+ " User: "+
				userScore)
		}
		else {
			userScore ++
			alert("Computer select scissors. You win. omputer: "+computerScore+ " User: "+
				userScore)
		}
	}

// User select 1
	function paperClicked(){
		var computerSelection = Math.floor(Math.random()*3)
		if (computerSelection == 0){
			userScore ++
			alert("Computer select rock. You win. Computer: "+computerScore+ " User: "+
				userScore)
		}
		else if (computerSelection == 1){
			alert("Computer select paper. It's a draw. Computer: "+computerScore+ " User: "+
				userScore)
		}
		else {
			computerScore ++;
			alert("Computer select scissors. You lose. Computer: "+computerScore+ " User: "+
				userScore)
		}
	}


</script>
</body>
</html>
