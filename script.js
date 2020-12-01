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
            
            <button class='btn btn-success btn-lg' onclick='renderAnswer(${index})'>${choice}</button>`;
            htmlString += `</div>`;
           
            
    });
    htmlString += `</div>`;
    return htmlString;
};

//render the user's answer
const renderAnswer = (choice) => {
    //making sure we are pressing the right button
    console.log(state.choices[choice]);

    let answer = '';

    if(choice === 0){
        answer += `You Chose:\nrock`;
    }else if(choice === 1){
        answer += `You Chose:\npaper`;
    }else{
        answer += `You Chose:\nscissor`;
    }
    alert(answer);

    let userAns = choice;
    //call computer answer
    let compAns = computerAnswer();
    //call check answer 
    checkAnswer(userAns, compAns);

    return answer;
};

//computer grabs an answer and shows to user
const computerAnswer = () =>{
    let compAnswer = Math.floor(Math.random() * state.choices.length);
    
    alert('Computer Chose:\n' + state.choices[compAnswer]);

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
        outcome = 'You win!';
    }else if(compWin){
        outcome = 'You lose!';
    }
    return alert(outcome);
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

