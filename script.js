let add = document.querySelector(".add");
let popUpSection = document.querySelector(".pop-up-section");
let select = document.querySelector("#select");
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
    getData(transDate.value, select.value,  transName.value, transAmount.value)
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
   constructor (date , month , year , transType ,transName, transAmount ){
       this.date = date;
       this.month = month + 1;
       this.year = year;
       this.type = transType;
       this.amount = transAmount
       this.name = transName
   }
}

function getData(date, transType , name , amount){
   let newData = new transaction(new Date(date).getDate() ,new Date(date).getMonth(),new Date(date).getFullYear(),transType, name , amount);
   console.log(newData.name);
   arr.push(newData);

   console.log(arr);

   if(transType == "income"){
    balanceAmount += Number(amount);
    balance.innerText = `${balanceAmount}`;
   }

   if(transType == "expense"){
    balanceAmount -= Number(amount);
    balance.innerText = `${balanceAmount}`;
   }
  
   displayOnUI(arr);

}


function displayOnUI(arr){
    arr.forEach((value) =>{
        console.log(value.name);
        let transactionList = document.createElement("div");
        let finalAmount = null;

        if(value.type == "expense"){
            finalAmount = `- ${value.amount}`
        }else{
            finalAmount = `+ ${value.amount}`
        }
        transactionList.add.classList("transactions-list");
        transactionList.innerHTML = `
         <div>
             <button class="view">></button>
             <p>${finalAmount}</p>
         </div>
         <p>-Rs. 140.00</p>
        `
    });

    console.log(transactionList);
}