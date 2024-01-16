let userScore= 0;
let compScore= 0;


const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const showWinner =(userWin,compChoice , userChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        
        msg.innerText =`wohoo!! you win ,computer choose ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;


        
        msg.innerText =` oops ! you lost, computer choose ${compChoice}`;
        msg.style.backgroundColor ="red";
    }
}



const genCompchoice= () => {
    const options = ["rock", "paper", "scissor"];
   const randIndx =  Math.floor( Math.random() * 3);
   return options [randIndx];
};
const drawGame = () => {
    console.log(" game was draw!")
    msg.innerText ="game was draw.Play Again!!"
    msg.style.backgroundColor ="black";
}

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const compChoice = genCompchoice();
    console.log("computer choice",compChoice);


    if (userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin =compChoice ==="paper" ?false : true;
    }  else if( userChoice=== "paper"){
        userWin = compChoice === "scissor" ?false : true;

    }  else {
        userWin = compChoice ==="rock" ? false :true ;
    }
    showWinner(userWin,compChoice, userChoice);
}

}

choices.forEach ((choice) =>{
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked" , userChoice);
        return playGame (userChoice);
    });
});

