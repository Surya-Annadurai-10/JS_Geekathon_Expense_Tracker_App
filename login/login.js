let localUser = localStorage.getItem("user");
let localUserarr = JSON.parse(localUser);
// console.log(localUserarr);

let btn = document.querySelector(".btn");

let email = document.querySelector(".email");
let password = document.querySelector(".password");

function loginValidation(){
  if (email.value == ""){
    alert("Enter your Email !");
    return false;
  }

  if (password.value == ""){
    alert("Enter the Password !");
    return false;
  }
    let Emailresult = localUserarr.some((value) =>{
       if( value.email == email.value){
       if(value.password == password.value){
        console.log("true");
        return true;

       }else{
      
        console.log("false")
        password.style.boxShadow = "0 0 20px rgb(255, 0 , 0)"
         alert("Enter Correct Password");
        return false;
      
       }
      
      
      }
 
    });

    // console.log()

    if(!Emailresult){
     
       email.style.boxShadow = "0 0 20px rgb(255, 0 , 0)"
       alert("Enter Correct email");
       return false;
  }else{
    return true;
  }
}