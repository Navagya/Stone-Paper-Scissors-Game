let userScore=0;
let compScore=0;

const userScoreId=document.querySelector("#userScore");
const compScoreId=document.querySelector("#compScore");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genComputerChoice=()=>{
    //rock, paper, scissor
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

    
}

const draw_game=()=>{
    console.log("Game is drawn");
    msg.innerText="Game is Drawn, TRY AGAIN";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win!");
        msg.innerText=`YOU WIN! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScoreId.innerText=userScore;
        console.log("you: ",userScore);
        console.log("comp: ",compScore);
    }else{
        console.log("you lose!");
        msg.innerText=`YOU LOSE! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScoreId.innerText=compScore;
         console.log("comp: ",compScore);
         console.log("you: ",userScore);
    }
}


const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice=genComputerChoice();
    console.log("Computer choice: ",compChoice);

    if(userChoice===compChoice){
        draw_game();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
           userWin = compChoice==="scissors"?false:true;
        }
        else{
           userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice, compChoice);
    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})