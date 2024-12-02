

let add = document.querySelector(".add");
let popUpSection = document.querySelector(".pop-up-section");
let select = document.querySelector("#select");
let category = document.querySelector("#category");
let transName = document.querySelector(".trans-name");
let transAmount = document.querySelector(".trans-amount");
let transDate = document.querySelector(".trans-date");
let submit = document.querySelector(".submit");
let balance = document.querySelector(".balance-num");
let transactionDetails = document.querySelector(".transaction-details");
let inner = document.querySelector(".inner");
let totalIncome = document.querySelector(".inc-amount");
let totalExpense = document.querySelector(".exp-amount");
let date = document.querySelector(".date");
let incomePopUp = document.querySelector(".inc-pop-up-section");
let history = document.querySelector(".history");
let id = 0;
let table = document.querySelector(".table")
let totalInc;
let totalExp;


date.innerText = new Date();
displayExpense(arr);
displayIncome(arr);



document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add")) {
    popUpSection.style.display = "block";
  }

  if (event.target.classList.contains("clear")) {
    popUpSection.style.display = "none";
  }

  if (event.target.classList.contains("submit")) {
    if (select.value == "income" && category.value != "income") {
      alert("Please check the Transaction Type && Category You have selected");
      return;
    }

    getData(
      transDate.value,
      select.value,
      transName.value,
      transAmount.value,
      category.value
    );
     
    if(bar.hasChildNodes(".chart")){
        bar.childNodes[1].remove();
        displayChart();
        console.log(arr);
        updateTotal(arr);
       
    }

    // displayIncome(arr);
       

    transDate.value = "";
    select.value = "";
    transName.value = "";
    transAmount.value = "";
    popUpSection.style.display = "none";
  }


  if(event.target.classList.contains("viewExp")){
    incomePopUp.style.display = "block";
   displayExpense(arr);
   history.innerText = "Expense History";
    
  }

  if(event.target.classList.contains("viewInc")){
    incomePopUp.style.display = "block";
   history.innerText = "Income History";
    displayIncome(arr);
     
   }
   if(event.target.classList.contains("ex")){
    incomePopUp.style.display = "none";
   }


   if(event.target.classList.contains("trans-view")){
    incomePopUp.style.display = "block";
    history.innerText = "Transaction History";
     displayAllTransaction(arr);
   }
  
});




function displayIncome(arr){
    table.innerHTML = "";
  
  table.innerHTML = `
   <thead>
        <th>Date</th>
        <th>Transaction Type</th>
        <th>Category</th>
        <th>Description</th>
        <th>Amount</th>          
    </thead>
  `
    
  arr.filter((ele)=>{
    return ele.type == 'income';
  }).forEach((value) =>{
    let tr = document.createElement("tr");
     
    tr.innerHTML = `
           <td>${value.date}-${value.month}-${value.year}</td>
            <td>${value.type}</td>
            <td>${value.category}</td>
            <td>${value.name}</td>
            <td>Rs. <span>${value.amount}</span></td>
     `
     table.appendChild(tr);
  })
}


function displayExpense(arr){
    table.innerHTML = "";
  
  table.innerHTML = `
   <thead>
        <th>Date</th>
        <th>Transaction Type</th>
        <th>Category</th>
        <th>Description</th>
        <th>Amount</th>          
    </thead>
  `
    
  arr.filter((ele)=>{
    return ele.type == 'expenses';
  }).forEach((value) =>{
    let tr = document.createElement("tr");
     
    tr.innerHTML = `
           <td>${value.date}-${value.month}-${value.year}</td>
            <td>${value.type}</td>
            <td>${value.category}</td>
            <td>${value.name}</td>
            <td>Rs. <span>${value.amount}</span></td>
     `
     table.appendChild(tr);
  })
}




function displayAllTransaction(arr){
    table.innerHTML = "";
  
  table.innerHTML = `
   <thead>
        <th>Date</th>
        <th>Transaction Type</th>
        <th>Category</th>
        <th>Description</th>
        <th>Amount</th>          
    </thead>
  `
    
  arr.forEach((value) =>{
    let tr = document.createElement("tr");
     
    tr.innerHTML = `
           <td>${value.date}-${value.month}-${value.year}</td>
            <td>${value.type}</td>
            <td>${value.category}</td>
            <td>${value.name}</td>
            <td>Rs. <span>${value.amount}</span></td>
     `
     table.appendChild(tr);
  })
}

updateTotal(arr);



// const arr = [
//     {date:30 , month:11, year:2024, category:'groceries', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'utilities', name:'tomato', type:'expenses', amount:400},
//     {date:30 , month:11, year:2024, category:'groceries', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'income', name:'tomato', type:'income', amount:2000},
//     {date:30 , month:11, year:2024, category:'groceries', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'entertainment', name:'tomato', type:'expenses', amount:400},
//     {date:30 , month:11, year:2024, category:'income', name:'tomato', type:'income', amount:1500},
//     {date:30 , month:11, year:2024, category:'groceries', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'study', name:'tomato', type:'expenses', amount:400},
//     {date:30 , month:11, year:2024, category:'income', name:'tomato', type:'income', amount:1000},
//     {date:30 , month:11, year:2024, category:'utilities', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'miscellaneous', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'miscellaneous', name:'tomato', type:'expenses', amount:400},
//     {date:30 , month:11, year:2024, category:'medical', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'medical', name:'tomato', type:'expenses', amount:400},
//     {date:30 , month:11, year:2024, category:'study', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'utilities', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'entertainment', name:'tomato', type:'expenses', amount:500},
//     {date:30 , month:11, year:2024, category:'utilities', name:'tomato', type:'expenses', amount:200},
//     {date:30 , month:11, year:2024, category:'entertainment', name:'tomato', type:'expenses', amount:1000}
// ]
// let arr = [];
// let balanceAmount = arr.reduce((acc , curr) =>{
//     return acc + curr.amount; 
// },0);

let balanceAmount = totalInc-totalExp;

  balance.innerText = `${balanceAmount}`;
  inner.style.width = "100%";
console.log(balanceAmount);

let maxBalance = balanceAmount;
let width = 0;

// const ctx = document.getElementById('myChart');
       
// const data = [
// {id : 0, category: 'Income', count: 1000 },
// {id : 1, category: 'Groceries', count: 2000 },
// {id : 2, category: 'Utilities', count: 1500 },
// {id : 3, category: 'Entertainment', count: 2500 },
// {id : 4, category: 'Study', count: 2200 },
// { id : 5,category: 'Medicine', count: 3000 },
// { id : 6,category: 'Miscellaneous', count: 2800 },
// ];

// //Chart Data

// for(let i = 0; i < category.length; i++){
//     let value = arr.filter((ele) =>{
//         return ele.category == category[i];
//     }).reduce((acc , curr) =>{
//         return acc + curr.amount;
//     },0);

//    data[i].count += value; 
// }
window.onload =()=>{
    displayChart();
// console.log(bar.childNodes(".chart"))
}


arr.forEach((val) =>{
  console.log(val)
  displayOnUI(val);
})



// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: data.map(yr => yr.category),
//     datasets: [{
//       label: '# Revenue Flow',
//       data: data.map(value => value.count),
//       backgroundColor : ['rgb(139,121,241,1)','rgb(139,121,241,0.5)','rgb(139,121,241,0.5)','rgb(139,121,241,0.5)','rgb(139,121,241,0.5)','rgb(139,121,241,0.5)','rgb(139,121,241,0.5)'],
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// class transaction {
//   constructor(date, month, year, transType, transName, transAmount, category) {
//     this.date = date;
//     this.month = month + 1;
//     this.year = year;
//     this.type = transType;
//     this.amount = Number(transAmount);
//     this.name = transName;
//     this.category = category;
//   }
// }

function getData(date, transType, name, amount, category) {
  let newData = {
    date: new Date(date).getDate(),
    month:  new Date(date).getMonth(),
    year:  new Date(date).getFullYear(),
    category: category,
    name: name,
    type:transType,
    amount: Number(amount)
  }
  console.log(newData.name);
  displayOnUI(newData);
  arr.push(newData);

console.log(arr);


  if (transType == "income") {
    balanceAmount += Number(amount);
    balance.innerText = `${balanceAmount}`;
    if (maxBalance == 0) {
      maxBalance += balanceAmount;
    }

    if (balanceAmount > maxBalance) {
      let diff = balanceAmount - maxBalance;
      maxBalance += diff;

      console.log("Updated: ", maxBalance);

      width = 100;
      inner.style.width = `${width}%`;
    }

    if (maxBalance > 0 && width == 0) {
      width = 100;
      inner.style.width = `${width}%`;
      console.log("initial: ", maxBalance);
    } else {
    //   let diff = maxBalance - balanceAmount;
      console.log("current : ", maxBalance);

      let percent = (balanceAmount / maxBalance) * 100;
      width = Math.floor(percent);
      if (width >= 100) {
        width = 100;
      }
      inner.style.width = `${width}%`;
    }
  }

  if (transType == "expenses") {
    balanceAmount -= Number(amount);
    balance.innerText = `${balanceAmount}`;
    let diff = maxBalance - balanceAmount;
    let percent = (diff / maxBalance) * 100;
    width = 100 - percent;
    inner.style.width = `${width}%`;
    console.log("current after expenses : ", maxBalance);
    console.log("bal after expenses : ", balanceAmount);
  }
}




function displayOnUI(value) {
  // console.log(value.name);

  let finalAmount = null;

  if (value.type == "expense") {
    finalAmount = `- Rs. ${value.amount}`;
  } else {
    finalAmount = `+ Rs. ${value.amount}`;
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
    `;
  transactionDetails.append(transactionList);
  let finalColor = transactionList.querySelector(".final-color");
  // console.log(finalColor)
  if (value.type == "income") {
    finalColor.style.backgroundColor = "green";
  } else {
    finalColor.style.backgroundColor = "red";
  }

  transactionList.addEventListener("click", (e) => {
    if (e.target.classList.contains("view")) {
      console.log(e.target.parentNode.parentNode.id);
      let delId = e.target.parentNode.parentNode.id;

      arr.splice(delId, 1);
      console.log(arr);
      e.target.parentNode.parentNode.remove();
    }
  });
}



function updateTotal(val){
    console.log(val);
    totalInc = val.filter((value) =>{
        return value.type == 'income';
    }).reduce((acc , curr) =>{
        return acc + curr.amount;
    }, 0);
console.log("totalInc", totalInc);
totalIncome.innerText = totalInc;
    totalExp = val.filter((value) =>{
        return value.type == 'expenses'
    }).reduce((acc , curr) =>{
        return acc + curr.amount;
    }, 0);

    console.log("totaExp", totalExp);

   
    totalExpense.innerText = totalExp;
}

