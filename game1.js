let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#resetbtn');
let turn0 = true;//player o ,player x

let newGamebtn=document.querySelector('#newbtn');

let Message=document.querySelector('#msg');
let msgCon=document.querySelector('.msg-con');


const resetGame=()=>{
    turn0=true;
    enableBox();
    msgCon.classList.add("hide");

}


const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

boxes.forEach((box) => {
 box.addEventListener("click",()=>{
    console.log("box was clicked")
    if(turn0===true){
        //player O
        box.innerText="O";
        box.style.color="red";
    
        turn0=false;
    }
    else{
        //player X
        box.innerText="X";
        turn0=true;

    }
    box.disabled=true;
    checkWinner();
 })
});

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const disabledBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerHTML=`<h1>Congratulations ,Winner is ${winner}</h1>`
    disabledBox();
    msgCon.classList.remove("hide");
}
let changeBtn=()=>{
resetBtn.innerText="Reset";
}
let checkWinner=()=>{
    for( let pattern of winpattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3= boxes[pattern[2]].innerText;



        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1==posval2 && posval2==posval3){
                console.log("winner",posval1);
                showWinner(posval1);
                resetBtn.innerText="New Game";
                resetBtn.addEventListener("click",changeBtn);
                
            }
           
        }
        
    }
}


resetBtn.addEventListener("click",resetGame);