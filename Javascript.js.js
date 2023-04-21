var player1 = prompt("Enter player 1 name!")
var player2 = prompt("Enter player 2 name!")
document.querySelector(".player-1").innerHTML = player1
document.querySelector(".player-2").innerHTML = player2






function randomNumber() {
    var numberMaker1 = Math.floor((Math.random() * 6) + 1);
    var numberMaker2 = Math.floor((Math.random() * 6) + 1);
    console.log("player one score is " + numberMaker1 + " player two score is " + numberMaker2)
    if (numberMaker1 > numberMaker2) {
        console.log("Player "+ player1 +" wins")
        document.querySelector(".result").innerHTML = " "+ player1 +' wins';
        
    } else if (numberMaker1 < numberMaker2) {
        console.log("Player "+ player2 +" wins")
        document.querySelector(".result").innerHTML = player2 +" wins";
    } else {
        console.log("draw")
        document.querySelector(".result").innerHTML = "Draw";
    }
    var numberArrayN1 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
    var diceN1 = numberMaker1 - 1 
    imageShown1 = numberArrayN1[diceN1]
    console.log(imageShown1)

    var numberArrayN2 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
    var diceN2 = numberMaker2 - 1 
    var imageShown2 = numberArrayN2[diceN2]
    console.log(imageShown2)
    document.querySelector(".img1").setAttribute("src", imageShown1)
    document.querySelector(".img2").setAttribute("src", imageShown2)

}

