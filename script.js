//creating choices
let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissor";


//creating a state
let state = {
    headerText: "Rock, Paper, Scissors",
    choices: [choice1, choice2, choice3],
};

//SOME CRUD actions create, update, and delete will not be needed for this assignment

//READ
const renderChoices = () => {
    let htmlString =   `<div class='choices'>`;

    //loop over every choice
    state.choices.forEach((choice, index) => {
        htmlString += `<div class='btn-group mr-2 choice' role='group'>
            
            <button class='btn btn-warning btn-lg' onclick='
            setDiv();
            renderAnswer(${index});'>${choice}</button>`;
            htmlString += `</div>`;     
    });
    htmlString += `</div>`;
    return htmlString;
};

const setDiv = () =>{
    let divId = document.getElementById("answer");
    divId.style.display = 'none';
};

//render the user's answer
const renderAnswer = (choice) => {
    //making sure we are pressing the right button
    console.log(state.choices[choice]);
    let htmlString = `<div class='d-flex flex-row justify-content-center'>`;

    htmlString += `<div class='user-choice m-auto'>`;

    if(choice === 0){
        htmlString += `<h4>You Chose:</h4>
                            <br/>
                            <p>Rock</p>`;
    }else if(choice === 1){
        htmlString += `<h4>You Chose:</h4>
                            <br/>
                            <p>Paper</p>`;
    }else{
        htmlString += `<h4>You Chose:</h4>
                            <br/>
                            <p>Scissors</p>`;
    }
    htmlString += `</div>`;
    //alert(answer);

    let userAns = choice;
    //call computer answer
    let compAns = computerAnswer();
    htmlString += `<div class= 'comp-answer m-auto'>`;
    if(compAns === 0){
        htmlString += `<h4>Computer Chose:</h4>
                            <br/>
                            <p>Rock</p>`;
    }else if(compAns === 1){
        htmlString += `<h4>Computer Chose:</h4>
                            <br/>
                            <p>Paper</p>`;
    }else{
        htmlString += `<h4>Computer Chose:</h4>
                            <br/>
                            <p>Scissors</p>`;
    }
    htmlString += `</div>`;

    //call check answer 
    let winner = checkAnswer(userAns, compAns);
    htmlString += `<div class='winner m-auto'>
                        <h4>Winner:</h4>
                        <br />
                        <p>${winner}</p>
                    </div>`;
    // show and hide div
    let divId = document.getElementById("answer");
    divId.innerHTML = htmlString;

    if (divId.style.display === "none"){
        divId.style.display = "block";
        
    }else{
        divId.style.display = "none";
    }

    htmlString += `</div>`

    return htmlString;
};

//computer grabs an answer and shows to user
const computerAnswer = () =>{
    let compAnswer = Math.floor(Math.random() * state.choices.length);
    
    //alert('Computer Chose:\n' + state.choices[compAnswer]);

    return compAnswer;
};

//check answer method
const checkAnswer = (userAns, compAns)=>{
    //lets make some rules
    let outcome = '';
    const userWin = (userAns === 0 && compAns === 2) || 
                    (userAns === 1 && compAns === 0) ||
                    (userAns === 2 && compAns === 1);

    const compWin = (compAns === 0 && userAns === 2) || 
                    (compAns === 1 && userAns === 0) ||
                    (compAns === 2 && userAns === 1);
    if(userAns === compAns){
        outcome = 'Tie game!';
    }else if(userWin){
        outcome = 'You';
    }else if(compWin){
        outcome = 'Computer';
    }
    return outcome;
};


//render method
const render = () => {
    console.log("render called");
    
    let root = document.getElementById("root");
    let htmlString = `<h1>${state.headerText}</h1>`;
    htmlString += renderChoices();
    root.innerHTML = htmlString;
};

//initial render
render();
console.log("script loaded");

