function play(playerSelection) {
    const computerSelection = Math.floor(Math.random() * 3);
    if(playerSelection === computerSelection) {
        draw();
    } else if((playerSelection + 1)%3 == computerSelection) {
        score("computer");
    } else {
        score("player");
    }
    moves(playerSelection, computerSelection);
}

function moves(playerSelection, computerSelection) {
    const possibility = ["rock", "paper", "scissors"];
    const container = document.getElementById("moves");

    const imgPlayer = new Image();
    const imgComputer = new Image();
    imgPlayer.src = `./images/${possibility[playerSelection]}.jpg`;
    imgComputer.src = `./images/${possibility[computerSelection]}.jpg`;

    const text = document.createElement("h1");
    text.appendChild(document.createTextNode("VS"));

    container.innerHTML = "";   
    container.appendChild(imgPlayer); 
    container.appendChild(text);
    container.appendChild(imgComputer);
}

function score(participant) {
    let score = +document.getElementById(participant).innerHTML;
    document.getElementById(participant).innerHTML = score + 1;
    won(participant)
}

function draw() { console.log("draw") }

function won(participant) {
    const round = 5 
    if(document.getElementById(participant).innerHTML >= round) {
        const text = document.createElement("h1");
        const champion = participant.toUpperCase();
        document.querySelector(".modal").classList.toggle("show-modal");
        text.appendChild(document.createTextNode(champion));
        document.getElementById("winner").appendChild(text);
    }
}

function restart() {
    document.querySelector(".modal").classList.toggle("show-modal");
    document.getElementById("computer").innerHTML = 0;
    document.getElementById("player").innerHTML = 0;
    document.getElementById("moves").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
}