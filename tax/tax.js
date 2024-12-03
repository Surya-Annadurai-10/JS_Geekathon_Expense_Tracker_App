import { GoogleGenerativeAI } from "@google/generative-ai";

let inputBox = document.querySelector(".input-box");
let enterBox = document.querySelector(".enter");
let inc = document.querySelector(".inc");
let taxrate = document.querySelector(".taxrate");
let taxPayable = document.querySelector(".tax-pay-amt");
let amtLeft = document.querySelector(".amount-left");
let answerBox = document.querySelector(".answer-box");
let promptMessage = document.querySelector(".message");
// let taxAi = document.querySelector(".tax-ai")
// let taxCal = document.querySelector(".tax-calc")
// let taxCurr = document.querySelector(".tax-curr")
// let header = document.querySelector("header")




document.addEventListener("click", (event) => {
  if (event.target.classList.contains("button")) {
    if (inputBox.value == "") {
      alert("Enter Amount To Calculate Tax !!");
    }
    calculateTax(Number(inputBox.value));
    inputBox.value = "";
  }

  if (event.target.classList.contains("get")) {
    if (enterBox.value == "") {
      alert("Enter Amount To Calculate Tax !!");
    }
    getAdvice(Number(enterBox.value), promptMessage.value);
    enterBox.value = "";
    promptMessage.value ="";
  }

  




});

function calculateTax(input) {
  let amountLeft;
  let amount;
  if (input >= 1000000) {
    inc.innerText = input;
    taxrate.innerText = "20";
    amount = (20 / 100) * input;
    amountLeft = input - amount;
  } else if (input >= 700000) {
    inc.innerText = input;
    taxrate.innerText = "15";
    amount = (15 / 100) * input;
    amountLeft = input - amount;
  } else if (input >= 500000) {
    inc.innerText = input;
    taxrate.innerText = "10";
    amount = (10 / 100) * input;
    amountLeft = input - amount;
  } else if (input >= 300000) {
    inc.innerText = input;
    taxrate.innerText = "5";
    amount = (5 / 100) * input;
    amountLeft = input - amount;
  } else {
    inc.innerText = input;
    taxrate.innerText = "0";
    amount = (0 / 100) * input;
    amountLeft = input - amount;
  }
  taxPayable.innerText = amount;
  amtLeft.innerText = amountLeft;
}

// let input = document.querySelector(".input");

// let up = document.querySelector(".up")

const API_KEY = "AIzaSyDkeW9qzMNdIpZbcJvD2DfQG1BQZHTbFK0";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

async function fetch(enterBoxValue, message) {
  const prompt = `My Income is ${enterBoxValue} and please give me some best advice that how can i save tax to increase my networth and also give me some informations regarding ${message}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// console.log(answerBox.childNodes[1]);

function getAdvice(enterBoxValue, message) {
  answerBox.childNodes[1].remove();

  let loading = document.createElement("div");
  loading.className = "loading";
  loading.innerHTML = `
    <img class="loading-img" src="https://media.tenor.com/3sMAijwE_f4AAAAj/loading-spinning.gif" alt="">
    
    `;
  answerBox.appendChild(loading);
  fetch(enterBoxValue, message)
    .then((data) => {
      // console.log(data);

      displayOnUI(data, enterBoxValue, message);
      // input.value = "";
    })
    .catch((error) => console.log(error));
}

function displayOnUI(data, enterBoxValue, message) {
  console.log(data);
  if (answerBox.hasChildNodes("loading")) {
    answerBox.childNodes[answerBox.childNodes.length - 1].remove();
  }
  let dataBox = document.createElement("div");

  dataBox.innerHTML = `
      
                <div class="query">
                    <div class="you-container">
                        <div class="you-icon">
                            <span style="font-size: 2.5rem; color: #DCF458;" class="material-symbols-outlined">
                            account_circle
                            </span>
                        </div>
                        <p class="you-content">You</p>
                </div>
                    <div class="question-box">
                        <p class="question"> Income : ${enterBoxValue}, You Asked : ${message}</p>
                    </div>
                </div>
                   <div class="para">
                    <span >
                        <img class = "star" src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="">
                    </span>
                   <div class="answer">
                    <p >${data}</p>
                    </div>
                </div>
                <h1 class="completed">
                    Check completed .. 
                </h1>
                <div class="bottom answer-icon">
                    <div class="plus-icon">
                        <span class="material-symbols-outlined">
                            thumb_up
                            </span>
                    </div>
                    <div class="plus-icon">
                        <span class="material-symbols-outlined">
                            thumb_down
                            </span>
                    </div>
                    <div class="plus-icon">
                        <span class="material-symbols-outlined">
                            tune
                            </span>
                    </div>
                    <div class="plus-icon">
                        <span class="material-symbols-outlined">
                            share
                            </span>
                    </div>
                    <div class="plus-icon">
                        <span class="material-symbols-outlined">
                            more_vert
                            </span>
                    </div>
                </div>


            
           
   `;

  answerBox.appendChild(dataBox);
}