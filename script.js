let add = document.querySelector(".add");
let popUpSection = document.querySelector(".pop-up-section");
let select = document.querySelector("#select");
let category = document.querySelector("#category")
let transName = document.querySelector(".trans-name")
let transAmount = document.querySelector(".trans-amount")
let transDate = document.querySelector(".trans-date")
let submit = document.querySelector(".submit")
let balance = document.querySelector(".balance-num");
let transactionDetails = document.querySelector(".transaction-details")

document.addEventListener("click" , (event) =>{
   if(event.target.classList.contains("add")){
      popUpSection.style.display = "block";
      
   }

   if(event.target.classList.contains("clear")){
    popUpSection.style.display = "none";
 }

 if(event.target.classList.contains("submit")){
    getData(transDate.value, select.value,  transName.value, transAmount.value, category.value)
    transDate.value = "";
    select.value = "";
    transName.value = "" ;
    transAmount.value = "";
    popUpSection.style.display= "none";
 }
}) ;

let arr = [];
let balanceAmount = 0;

class transaction{
   constructor (date , month , year , transType ,transName, transAmount,category ){
       this.date = date;
       this.month = month + 1;
       this.year = year;
       this.type = transType;
       this.amount = transAmount
       this.name = transName
       this.category = category;
   }
}

function getData(date, transType , name , amount,category){
   let newData = new transaction(new Date(date).getDate() ,new Date(date).getMonth(),new Date(date).getFullYear(),transType, name , amount,category);
   console.log(newData.name);
   displayOnUI(newData)
   arr.push(newData);
//    let transactionListArr = document.querySelectorAll(".transactions-list");
//    console.log(transactionListArr)
   
//      transactionListArr.forEach((value , index) =>{
//          value.addEventListener("click" , (e) =>{
//             //  console.log(e.target);
//              if((e.target.classList.contains("del")) || (e.target.classList.contains("view"))){
//                  console.log(index);
//              }
//          })
//      })
//    console.log(arr);

   if(transType == "income"){
    balanceAmount += Number(amount);
    balance.innerText = `${balanceAmount}`;
   }

   if(transType == "expense"){
    balanceAmount -= Number(amount);
    balance.innerText = `${balanceAmount}`;
   }
  
//    displayOnUI(arr);

}

let id = 0;
function displayOnUI(value){
   
    // console.log(value.name);

    let finalAmount = null;

    if(value.type == "expense"){
        finalAmount = `- Rs. ${value.amount}`
    }else{
        finalAmount = `+ Rs. ${value.amount}`
    }

    let transactionList = document.createElement("div");
    transactionList.className = "transactions-list";
    transactionList.id = `${id++}`;
    transactionList.innerHTML = `
     <div>
         <button class="view">
        x
         </button>
         <p>${value.name}</p>
     </div>
     <p class="final-color">${finalAmount}</p>
    `
    transactionDetails.append(transactionList);
    let finalColor = transactionList.querySelector(".final-color");
    // console.log(finalColor)
    if(value.type == "income"){
        finalColor.style.backgroundColor = "green";
    }else{
        finalColor.style.backgroundColor = "red";

    }

  transactionList.addEventListener("click" , (e) =>{
    if( e.target.classList.contains("view")){
        console.log(e.target.parentNode.parentNode.id);
        let delId = e.target.parentNode.parentNode.id;
        
        arr.splice(delId, 1);
        console.log(arr);
         e.target.parentNode.parentNode.remove();
    }
  })
    


   
}

