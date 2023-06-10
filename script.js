 const form = document.getElementById("form");
 const username = document.getElementById("username");
 const email = document.getElementById("email");
 const password = document.getElementById("password");
 const cPassword = document.getElementById("c-password");

 function showError(input, message) {
     const formControl = input.parentElement;
     formControl.className ="input error";
     const small = formControl.querySelector("small");
     small.innerText = message;
 }

 function showSuccess(input){
     const formControl = input.parentElement;
     formControl.classList.add("success");
 }

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if (input.value.trim() === ""){
            showError(input, "This field is required");
        }else{
            showSuccess(input);
        }
    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input,min,max){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length>max){
      showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

function checkEmail(input) {
    const re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
    showSuccess(input);
    } else {
    showError(input, "E-mail is not Valid");
    }
    }
    // Check Password Match
    function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
    }
    }
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, cPassword]);
    checkLenghth(username, 3, 15);
    checkLenghth(password, 8, 25);
    checkEmail(email);
     checkPasswordMatch(password, cPassword);
     });
 function validate() {
     var username = document.reg_form.username;
     var email = document.reg_form.email;
     var mobile = document.reg_form.mobile;
     var password = document.reg_form.password;
     var cpassword = document.reg_form.cpasswor
     if (username.value == "") {
         alert("Please enter your username");
         username.focus();
         return false;
     }
     if (email.value == "") {
         alert("Please enter your email");
         email.focus();
         return false;
     }
     if (mobile.value == ""){
         alert("Please enter your mobile number");
         mobile.focus();
         return false;
     }
     if (password.value == "") {
         alert("Please enter your password");
         password.focus();
         return false;
     }
     if (cpassword.value == "") {
         alert("Please enter your confirm password");
         cpassword.focus();
         return false;
     }

  return false;
  

}