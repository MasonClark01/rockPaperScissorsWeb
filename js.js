let rps = [1, 1, 1]
let round = 0
let previousChoice = []

function rpsRound(playerInput){
    let x = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if(playerInput === 2 && x === 0){
        return false
    }
    else{
        return(playerInput > x)
    }
}

