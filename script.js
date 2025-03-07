let choices = document.querySelectorAll(".icon");
let resultB = document.querySelector(".result-announce");
let scoreu = document.querySelector(".score-numberu");
let scorec = document.querySelector(".score-numberc");

let randomComp = () => {
  let compChoice = ["rock", "paper", "scissor"];
  let idx = Math.floor(Math.random() * 3);
  return compChoice[idx];
};

let useChoice = (result) => {
  let compResult = randomComp();
 
  if (result === compResult) {
    resultB.innerHTML = `it's a Draw! you both chose ${result}`;
    resultB.style.backgroundColor = "orange";
    resultB.style.color = "black";
  } else if (result === "rock" && compResult === "paper") {
    scorec.innerHTML++;
    resultB.innerHTML = `Opps.. You Lose ${compResult} beats ${result}`;
    resultB.style.backgroundColor = "red";
    resultB.style.color = "black";
  } else if (result === "rock" && compResult === "scissor") {
    scoreu.innerHTML++;
    resultB.innerHTML = `Yehh.. You Won! ${result} beats ${compResult}`;
    resultB.style.backgroundColor = "limegreen";
    resultB.style.color = "black";
  } else if (result === "paper" && compResult === "scissor") {
    scorec.innerHTML++;
    resultB.innerHTML = `Opps.. You Lose ${compResult} beats ${result}`;
    resultB.style.backgroundColor = "red";
    resultB.style.color = "black";
  } else if (result === "paper" && compResult === "rock") {
    scoreu.innerHTML++;
    resultB.innerHTML = `Yehh.. You Won! ${result} beats ${compResult}`;
    resultB.style.backgroundColor = "limegreen";
    resultB.style.color = "black";
  } else if (result === "scissor" && compResult === "rock") {
    scorec.innerHTML++;
    resultB.innerHTML = `Opps.. You Lose ${compResult} beats ${result}`;
    resultB.style.backgroundColor = "red";
    resultB.style.color = "black";
  } else if (result === "scissor" && compResult === "paper") {
    scoreu.innerHTML++;
    resultB.innerHTML = `Yehh.. You Won! ${result} beats ${compResult}`;
    resultB.style.backgroundColor = "limegreen";
    resultB.style.color = "black";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let result = choice.getAttribute("id");
    useChoice(result);
  });
});

// LIGHT AND DARK MODE########

let btn = document.querySelector("#toggle-btn");
let backgroundB = document.querySelector(".toggle-container");
let body = document.querySelector("body");
let color = "white";

btn.addEventListener("click", () => {
 if(color === "white") {
  color = "black";
  backgroundB.setAttribute("class","toggle-container2");
  body.style.backgroundColor = "black";
  body.style.transition = "all 0.5s steps(20)";
 } else if(color === "black") {
  color = "white";
  backgroundB.setAttribute("class","toggle-container");
  body.style.backgroundColor = "rgb(234, 233, 233)";
  body.style.transition = "all 0.5s steps(20)";
 }
});

