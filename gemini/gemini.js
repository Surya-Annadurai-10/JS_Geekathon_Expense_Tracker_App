import { GoogleGenerativeAI } from "@google/generative-ai";


let input = document.querySelector(".input");
let  answerBox = document.querySelector(".answer-box")
let up = document.querySelector(".up")
let press = document.querySelector(".press");


const API_KEY = "AIzaSyDkeW9qzMNdIpZbcJvD2DfQG1BQZHTbFK0";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

async function fetch(params) {
    const prompt = input.value;
    const result = await model.generateContent(prompt);
return result.response.text();
}

// console.log(answerBox.childNodes[1]);

input.addEventListener("keyup" , (e) =>{
   if(e.key == 'Enter'){
    answerBox.childNodes[1].remove();

   
    let loading = document.createElement("div");
    loading.className = "loading"
    loading.innerHTML = `
    <img class="loading-img" src="https://media.tenor.com/3sMAijwE_f4AAAAj/loading-spinning.gif" alt="">
    
    `
    answerBox.appendChild (loading );
    fetch().then((data) =>{
        // console.log(data);
      
        displayOnUI(data , input.value);
        input.value = "";
    }).catch(error => console.log(error)
    );
    
   }
})


up.addEventListener("click" , () =>{
    answerBox.childNodes[1].remove();
press.style.visibility = "hidden";
   
    let loading = document.createElement("div");
    loading.className = "loading"
    loading.innerHTML = `
    <img class="loading-img" src="https://media.tenor.com/3sMAijwE_f4AAAAj/loading-spinning.gif" alt="">
    
    `
    answerBox.appendChild (loading );
    fetch().then((data) =>{
        // console.log(data);
      
        displayOnUI(data , input.value);
        input.value = "";
    }).catch(error => console.log(error)
    );
    
  
  
})


function displayOnUI(data,prompt){
   console.log(data);
if(answerBox.hasChildNodes("loading")){
answerBox.childNodes[answerBox.childNodes.length - 1].remove();
}
   let dataBox = document.createElement("div");

   dataBox.innerHTML = `
      
                <div class="query">
                    <div class="profile-icon">
                        S
                    </div>
                    <div class="question-box">
                        <p class="question">${prompt}</p>
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


            
           
   `

   answerBox.appendChild(dataBox);
   
}


input.addEventListener("keyup" , (e) =>{
    press.style.visibility = "hidden";
    if(e.key != "Enter"){
        update(input.value);
    }
});


function debouncing(fn , delay){
    let timer;

    return function (args){
        if(timer) clearTimeout(timer);

            timer = setTimeout(() =>{
                fn(args);
            },delay);
    }
}


let update = debouncing(fetchData , 2000);


function fetchData(args){
    press.style.visibility = "visible";
 
}