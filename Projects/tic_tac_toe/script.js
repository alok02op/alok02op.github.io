// Accessing Elements 
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let start = document.querySelector("#start");
let playerX = document.querySelector("#playerX");
let playerO = document.querySelector("#playerO");
let msg = document.querySelector("#msg");
let msg_container = document.querySelector("#msg_container");
let newgame = document.querySelector("#newgame");

// Defining some variables
const winning_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let turnO = true;
function play(box){
    if (turnO){
        box.innerText = "O";
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
}
const myEventlistener = (e) => {
    let id = "#"+e.target.getAttribute("id");
    let box = document.querySelector(id)
    play(box);
}

function game(){
    boxes.forEach((box) => {
        box.addEventListener("click",myEventlistener);
    })
}

function restart(){
    boxes.forEach((box) => {
        box.innerText = "";
        box.removeEventListener("click",myEventlistener);
        box.disabled = false;
        box.style.backgroundColor = "#1B5145";
    })
    msg.innerText ="";
    msg_container.classList.add("hide");
    turnO = true;
}
start.addEventListener("click",game);
start.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.style.backgroundColor = "#69FFF1";
    })
})
reset.addEventListener("click",restart);
newgame.addEventListener("click",() => {
    document.location = "#temp";
    restart();
})

const checkWinner = () => {
    var count = 0;
    for (pattern of winning_pattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 & pos2===pos3){
                count+=1;
                if (pos1 == "O"){
                    if (playerO.value == ""){
                        var team = "player-O";
                    }else{
                        var team = playerO.value;
                    }
                    msg_container.classList.remove("hide")
                    msg.textContent = `Winner: ${team}`;
                    boxes.forEach((box) => {
                        box.removeEventListener("click",myEventlistener);
                    })

                }else {
                    if (playerX.value == ""){
                        var team = "player-X";
                    }else{
                        var team = playerX.value;
                    }
                    msg_container.classList.remove("hide")
                    msg.textContent = `Winner: ${team}`;
                    boxes.forEach((box) => {
                        box.removeEventListener("click",myEventlistener);
                    })
                }
            }
        }
    }
    let temp = 0;
    boxes.forEach((box) => {
        if (box.innerText!=""){
            temp+=1;
        }
    })
    if(temp==9 && count == 0){
        msg_container.classList.remove("hide")
        msg.textContent = `Game Tie`;
    }
}
// ----------------------------------------------------------------------------------------------------------------



