//step 1: add click event handler with submit button

document.getElementById('btn-submit').addEventListener('click',function(){
    //step 2: get the email address inside the email field
    //always remember to use .value to get text from an input field
    const emailField=document.getElementById('user-email');
    const email=emailField.value;

    //step 3: get password
    //3.a set id to html element
    //3.b get the element 
    //3.c get the value
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;

    //DANGER: DO NOT VERIFY email password on the client sidepasswordField
    //step 4: verify email & password & check whether valid user or not
    
    if(email==='tama@gmail.com'&& password==='secret'){
        window.location.href='bank.html';
    }
    else{
       alert('Wrong email or Password !!');
    }

})