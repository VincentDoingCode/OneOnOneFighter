var playerStrength = 6;
var playerCunning = 6;
var playerSpeed = 6;
var playerFatigue = 30;

var compStrength = 6;
var compCunning = 6;
var compSpeed = 6;
var compFatigue = 30;

function initalize(){
    computerStrength.innerHTML = compStrength;
    computerCunning.innerHTML = compCunning;
    computerSpeed.innerHTML = compSpeed;
    computerFatigue.innerHTML = compFatigue;
    compStat();
    display();
}

function compStat(){
    for(var i = 0; i < 4; i++){

    }
    let rnd = getRandomInteger(1,4);
    if(rnd == 1){
        if(getRandomInteger(0,1) == 1){
            compStrength += getRandomInteger(0,1);
        }
        else{
            compStrength -= getRandomInteger(0,1);
        }
    }
    if(rnd == 2){
        if(getRandomInteger(0,1) == 1){
            compCunning += getRandomInteger(0,1);
        }
        else{
            compCunning -= getRandomInteger(0,1);
        }
    }
    if(rnd == 3){
        if(getRandomInteger(0,1) == 1){
            compSpeed += getRandomInteger(0,1);
        }
        else{
            compSpeed -= getRandomInteger(0,1);
        }
    }
    if(rnd == 4){
        if(getRandomInteger(0,1) == 1){
            compFatigue += getRandomInteger(0,6);
        }
        else{
            compFatigue -= getRandomInteger(0,6);
        }
    }
}

function getRandomInteger(lower, upper){
	var multiplier = upper - (lower - 1);
	var rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}

function display(){
    computerStrength.innerHTML = compStrength;
    computerCunning.innerHTML = compCunning;
    computerSpeed.innerHTML = compSpeed;
    computerFatigue.innerHTML = compFatigue;
}