let game=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcon=document.querySelector(".message");
let msg=document.querySelector("#message");
let msgcon2=document.querySelector(".message2");
let msg2=document.querySelector("#message2");


let turnO=true;

let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]    
];

const resetGame = () => {
    turnO=true;
    enableboxes();
    msgcon.classList.add("hide");
}

game.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked box");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disablebox = () =>{
    for(let box of game) {
        box.disabled =true;
    }
}

const enableboxes = () =>{
    for(let box of game){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disablebox();
};

const showTie = () => {
    msg2.innerText = "It's a Tie!";
    msgcon2.classList.remove("hide");
    disablebox();
};

const checkWinner = () =>{
    let winner=false;
    for(let pattern of arr){
        let pos1=game[pattern[0]].innerText;
        let pos2=game[pattern[1]].innerText;
        let pos3=game[pattern[2]].innerText;

        if(pos1!=="" && pos2!=="" && pos3!=="" ){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                winner=true;
                showWinner(pos1);
            }
            
        }  
    }
    if (!winner) {
        let allBoxesFilled = true;
        game.forEach((box) => {
            if (box.innerText === "") {
                allBoxesFilled = false;
            }
        });

        if (allBoxesFilled) {
            showTie();
        }
    }
    

};

reset.addEventListener("click", resetGame);
newgame.addEventListener("click", resetGame);


