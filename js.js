let pscore = 0
let bscore = 0

let previousChoice = undefined
let bobChoices = []

function changePlayerImg(image){
    if(image === 0){
        document.getElementById("player-img").src = "./images/rock.svg"
    }
    if(image === 1){
        document.getElementById("player-img").src = "./images/paper.svg"
    }
    if(image === 2){
        document.getElementById("player-img").src = "./images/scissors.svg"
    }
}

function changeText(control){
    if(x = 0){

    }
    //1 for player win, -1 for bobwin, 0 for tie. update pscore and bscore here and update score id and text id.
}
function rpsRound(playerInput){
    let x = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    let pI = playerInput
    bobChoices.push(x);
    if(previousChoice === undefined){
        bobChoices.push(Math.floor(Math.random() * (2 - 0 + 1)));
    }
    else{
        if(previousChoice === 2){
            bobChoices.push(0);
        }
        if(previousChoice === 1){
            bobChoices.push(2)
        }
        if(previousChoice === 0){
            bobChoices.push(1)
        }
    }
    console.log(bobChoices)
    let bobRound = bobChoices[Math.floor(Math.random() * (bobChoices.length - 0 + 1))];
    console.log(bobRound)
    previousChoice = playerInput
    changePlayerImg(playerInput)
    if((playerInput === 2 && bobRound === 0) || (playerInput === 0 && bobRound === 1)){
        changeText(-1)
    }
    else if(playerInput === bobRound){
        changeText(0)
    }
    else{
        changeText(1)
    }
}