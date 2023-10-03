var rounds = parseInt(prompt("How many rounds would you like to play?"))

var globalWins = 0
var globalLosses = 0
var globalTies = 0

for (let i = 0; i < rounds; i++) {
var userChoice = prompt("rock, paper, or scissors? (enter r, p or s)")

if (userChoice !== "r" || userChoice !== "p" || userChoice !== "s") {
    alert("Wrong! Try again.")
    i--
    break
}

 var computerChoice = Math.floor(Math.random() * 3)

if ((userChoice === "r" && computerChoice === 0) 
    || (userChoice === "p" && computerChoice === 1) 
    || (userChoice === "s" && computerChoice === 2)) {
    globalTies++
        alert("You tied!")
    
} else if ((userChoice === "r" && computerChoice === 2)
    || (userChoice === "p" && computerChoice === 0)
    || (userChoice === "s" && computerChoice === 1)) {
    globalWins++
        alert("You won!")
    
} else if ((userChoice === "r" && computerChoice === 1)
    || (userChoice === "p" && computerChoice === 2)
    || (userChoice === "s" && computerChoice === 0)){
    globalLosses++
        alert("You lost!")
}

}

alert("You had " + globalWins + " wins, " + globalLosses + " losses, and " + globalTies + " ties." )