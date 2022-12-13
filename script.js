var playerStrength = 6;
var playerCunning = 6;
var playerSpeed = 6;
var playerFatigue = 30;
var playerAttack = (playerStrength+playerCunning+playerSpeed)/getRandomInteger(1,3);
var playerDefense = 0;
var playerDamage =0;

var compStrength = 6;
var compCunning = 6;
var compSpeed = 6;
var compFatigue = 30;
var compAttack = (compSpeed + compStrength + compSpeed)/getRandomInteger(1,3);
var compDefense = 0;
var compDamage = 0;

var onPlayerDefense = false;
var onComputerDefense = false;

function initalize(){
    computerStrength.innerHTML = compStrength;
    computerCunning.innerHTML = compCunning;
    computerSpeed.innerHTML = compSpeed;
    computerFatigue.innerHTML = compFatigue;


    //getting defense for player (1) and computer (2)
    getDefense(1);
    getDefense(2);

    playerDamage = playerAttack - compDefense;
    compDamage = compAttack - playerDefense;

    compStat();
    display();

    console.log(compDefense);
    console.log(playerDefense);
}

function compStat(){
    for(var rnd = 1; rnd <= 4; rnd++){
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
}

function computerMove(){
    checkComputerFinishingMove();
    if(getRandomInteger(1,2) == 1){
        damageDealt(2);
        addLogs(2, "Attack", compDamage);
    }
    else{
        onDefense(2);
        addLogs(2, onComputerDefense, compDefense);
    }
}

function onDefense(id){
    if(id == 1){
        onPlayerDefense = !onPlayerDefense;
        computerMove();
    }
    else{
        onComputerDefense = !onComputerDefense;
    }
    getDefense(id);
    checkHitDefense();
    if(id == 1){
        addLogs(1,onPlayerDefense, playerDefense); 
    }
    //testing to see if button changes
    // console.log(playerDefense);
    // console.log(compDefense);
}
function getDefense(id){
    if(id == 1){
        
        if(onPlayerDefense == true){
            playerDefense = (playerCunning + playerSpeed);
        }
        else{
            playerDefense = (playerSpeed + getRandomInteger(1,6));
        }
           
    }
    else{
        if(onComputerDefense){
            compDefense = (compCunning + compSpeed);
        }
        else{
            compDefense = (compSpeed + getRandomInteger(1,6));
        }
    }

}

//When there is no attack when you are defending.
function checkHitDefense(){
    if(onPlayerDefense && onComputerDefense){
        playerFatigue +=getRandomInteger(1,6);
        compFatigue += getRandomInteger(1,6);
        if(playerFatigue >30){
            playerFatigue = 30
        }
        if(compFatigue > 30){
            compFatigue = 30;
        }
    }
    else if(onPlayerDefense && compDamage == 0){
        playerFatigue += getRandomInteger(1,6);
        if(playerFatigue >30){
            playerFatigue = 30
        }
    }
    else if(onComputerDefense && playerDamage ){
        compFatigue += getRandomInteger(1,6);
        if(compFatigue > 30){
            compFatigue = 30;
        }
    }
    else{ 
        console.log("ATTACK");
    }
    display();
}

function checkPlayerFinishingMove(){
    if(compFatigue <0){
        alert("YOU WON!!!");
    }
    else{
        alert("Enemy Fatigue is not below 0");
    }
}

function checkComputerFinishingMove(){
    if(playerFatigue<0){
        alert("YOU LOSE!!!");
    }
}
//Damage dealt to player or computer
function damageDealt(id){
    
    playerAttack = (playerStrength+playerCunning+playerSpeed)/getRandomInteger(1,3);
    compAttack = (compSpeed + compStrength + compSpeed)/getRandomInteger(1,3);

    console.log("playe attack:" + playerAttack);
    console.log("Comp Attack:"+compAttack);
    playerDamage = playerAttack - compDefense;
    compDamage = compAttack - playerDefense;

    if(playerDamage <0){playerDamage = 0;}
    if(compDamage <0){compDamage = 0;}

    //id 1 is damage done to computer aka player attacking
    if(id == 1){
        compFatigue -= playerDamage;
        addLogs(1,"Attack", playerDamage);
        computerMove();
    }
    else{
        playerFatigue -= compDamage;
    }

    console.log(compFatigue);
    display();
}

function addLogs(id, command, commandValue){
    var playerTable = document.getElementById("playerLog");
    var computerTable = document.getElementById("computerLog");
    var playerRow = playerTable.insertRow(-1);
    var computerRow = computerTable.insertRow(-1);
    var playerCell = playerRow.insertCell(-1);
    var playerCell2 = playerRow.insertCell(-1);
    var computerCell = computerRow.insertCell(-1);
    var computerCell2 = computerRow.insertCell(-1);

    if(command == true){
        command = "Defending"
    }
    if(command == false){
        command = "Not Defending"
    }
    if(id == 1){
        playerCell.innerHTML = command;
        playerCell2.innerHTML = commandValue;
    }
    else{
        computerCell.innerHTML = command;
        computerCell2.innerHTML = commandValue;
    }
}
function getRandomInteger(lower, upper){
	var multiplier = upper - (lower - 1);
	var rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}

function display(){
    player1Strength.innerHTML = playerStrength;
    player1Cunning.innerHTML = playerCunning;
    player1Speed.innerHTML = playerSpeed;
    player1Fatigue.innerHTML = playerFatigue;


    computerStrength.innerHTML = compStrength;
    computerCunning.innerHTML = compCunning;
    computerSpeed.innerHTML = compSpeed;
    computerFatigue.innerHTML = compFatigue;

    

}