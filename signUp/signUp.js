let userName = document.querySelector(".username")
let email = document.querySelector(".email")
let passwordinput = document.querySelector(".password")
let confirmPassword = document.querySelector(".confirm")
let btn = document.querySelector("#btn");
let form = document.querySelector("form");

// let input = document.querySelector("input");
let low = document.querySelector(".lowercase");
let up = document.querySelector(".uppercase");
let num = document.querySelector(".numbers");
let sym = document.querySelector(".symbols");
let numChar = document.querySelector(".num-char");
let strength = document.querySelector(".strength");
let inner = document.querySelector(".inner");

btn.addEventListener("click" , (e) =>{
// e.preventDefault();
    // validation( userName.value,email.value , passwordinput.value ,confirmPassword.value );
    // userName.value = "";
    // email.value = "";
    //  passwordinput.value = "";
    // confirmPassword.value = "";
});

// console.log("hi");

//Recording User Details
function validation(){
   let  user = userName.value ;
    let  emailAdd = email.value;
    let password =passwordinput.value;
   let  confirmPass = confirmPassword.value
    if(user == ""){
        alert("Enter User Name !!");
        return false;
        
    }
console.log("hi")
    if(emailAdd == ""){
        alert("Enter Email !!")
        return false;
        
    }

    if(password == ""){
        alert("Enter Password !!")
        return false;
        
    }

    if(confirmPass == ""){
        alert("Enter Confirm Password !!")
        return false;
        
    }
    
    
    if(password != confirmPass){
        alert("Check Your Password");;
        return false;
    }

    if(password.length < 7 && confirmPass < 7){
        alert("Password Should contain atleast 6 Characters");
        return false;
    }

   
    let arr = [];
    // console.log( userName,email, password ,confirmPassword );
    let obj = {
        id: Number(new Date()),
        userName : user,
        email : emailAdd,
        password : password,
        
    }


   if (localStorage.getItem("user") == null){
    arr.push(obj);
    localStorage.setItem("user" ,JSON.stringify(arr) );
   }else{
    let user = localStorage.getItem("user")
    let userArr = JSON.parse(user);
    userArr.push(obj);
    localStorage.setItem("user" , JSON.stringify(userArr));
   }
  

    console.log(obj);
    return true;
}

// localStorage.clear();


//Password Strength
let passwordStrength = document.querySelector(".password-strength");
passwordinput.addEventListener("click" , ()=>{
    passwordStrength.style.display = "block";
})

confirmPassword.addEventListener("click" , ()=>{
    passwordStrength.style.display = "none";

})

passwordinput.addEventListener("keyup", () => {
    console.log(passwordinput.value)
  numChar.innerText = passwordinput.value.length;
  let password = passwordinput.value;
  if(inner.length < 4){
    strength.innerText = "Weak"
  }
  check(password);
});

function check(password) {
  let regEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let lowEx = /(?=.*[a-z])/;
  let uppEx = /(?=.*[A-Z])/;
  let digEx = /(?=.*\d)/;
  let spEx = /(?=.*[@$!%*?&])/;

  if (password.length == 0) {
    inner.style.width = `0%`;
  }

  if (password.length == 4) {
    inner.style.width = `20%`;
    inner.style.backgroundColor = "red";
  }

  if (password.length == 6) {
    inner.style.width = `30%`;
  }

  if (password.length == 9) {
    inner.style.width = `40%`;
  }

  if (password.length == 12) {
    inner.style.width = `50%`;
  }

  if (password.length == 15) {
    inner.style.width = `60%`;
    inner.style.backgroundColor = "#FFA500";
  }

  if (password.length == 18) {
    inner.style.width = `70%`;
    inner.style.backgroundColor = "#FFA500";
  }

  if (lowEx.test(password)) {
    low.style.color = "#008000";
  } else {
    low.style.color = "grey";
  }

  if (uppEx.test(password)) {
    up.style.color = "#008000";
  } else {
    up.style.color = "grey";
  }

  if (digEx.test(password)) {
    num.style.color = "#008000";
  } else {
    num.style.color = "grey";
  }

  if (spEx.test(password)) {
    sym.style.color = "#008000";
  } else {
    sym.style.color = "grey";
  }



  if (
    password.length >= 4 &&
    lowEx.test(password) &&
    spEx.test(password) &&
    digEx.test(password) &&
    uppEx.test(password)
  ) {
    inner.style.backgroundColor = "red";
    inner.style.width = "50%";
  }

  if (
    password.length >= 6 &&
    lowEx.test(password) &&
    spEx.test(password) &&
    digEx.test(password) &&
    uppEx.test(password)
  ) {
    inner.style.backgroundColor = "#FFA500";
    inner.style.width = "60%";
  }

  if (
    password.length >= 9 &&
    lowEx.test(password) &&
    spEx.test(password) &&
    digEx.test(password) &&
    uppEx.test(password)
  ) {
    inner.style.backgroundColor = "#FFA500";
    inner.style.width = "70%";
  }

  if (
    password.length >= 12 &&
    lowEx.test(password) &&
    spEx.test(password) &&
    digEx.test(password) &&
    uppEx.test(password)
  ) {
    inner.style.backgroundColor = "#FFA500";
    inner.style.width = "80%";
  }

  if (
    password.length >= 15 &&
    lowEx.test(password) &&
    spEx.test(password) &&
    digEx.test(password) &&
    uppEx.test(password)
  ) {
    inner.style.backgroundColor = "#008000";
    inner.style.width = "90%";
  }

  if (
    password.length >= 18 &&
    lowEx.test(password) &&
    spEx.test(password) &&
    digEx.test(password) &&
    uppEx.test(password)
  ) {
    console.log("100");
    inner.style.backgroundColor = "#008000";
    inner.style.width = "100%";
  }



  if (inner.style.backgroundColor == "red") {
    strength.innerText = "Weak";
  }

  if (inner.style.backgroundColor == "rgb(255, 165, 0)") {
    strength.innerText = "Medium";
  }

  if (inner.style.backgroundColor == "rgb(0, 128, 0)") {
    strength.innerText = "Strong";
  }

  // console.log(inner.style.backgroundColor);
}


