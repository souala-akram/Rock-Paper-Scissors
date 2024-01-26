function getComputerChoice (){
    return Math.floor(Math.random() * 3) + 1;
}
getComputerChoice();
function playGame (){
    const userChoice = prompt("Choose 1 (rock), 2 (paper), or 3 (scissors)");
    const PcChoice = getComputerChoice();
    alert(userChoice);
    if (PcChoice == 1){
        alert("The pc choice rock");
    }else if (PcChoice == 2){
        alert("The pc choice paper");
    }else {
    alert("The pc choice SCISSORS"); }
    if ( userChoice == PcChoice){
        alert("Draw 🙂 ");
    }else if (userChoice == 1 && PcChoice == 2 || userChoice == 2 && PcChoice == 3 || userChoice == 3 && PcChoice == 1){
        alert("you lose 😢");
    }else {
        alert("you won 😍 ");
    }
}
playGame();