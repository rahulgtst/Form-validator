const form=document.querySelector('form');
const username=document.getElementById('Name');
const email=document.getElementById('Email');
const password=document.getElementById('Password');
const password2=document.getElementById('Password2');
//show input error message
function showError(input,message){
    const formcontrol=input.parentElement;
    formcontrol.classList.add('error');
    const small=formcontrol.querySelector('small');
    small.innerText=message;
}
//show success outline
function showSuccess(input) {
    const formcontrol=input.parentElement;
    formcontrol.classList.add('success');
}
//function validate the email
function checkValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input)){
        showSuccess(input);
    }
    else{
        showError(input,`${input.id} is not Valid`);
    }
}
//check all the required fields
function checkRequired(inputArr) {
    inputArr.forEach(element => {
        if(element.value.trim()===''){
            showError(element,`${element.id} is required`)
        }
        else{
            showSuccess(element);
        }
    });
}
//check the length of fields
checkLength = (input,min,max)=>{
    if(input.value.length<min){
        showError(input,`${input.id} must be atleast ${min} letters.`);
    }else if(input.value.length>max){
        showError(input,`${input.id} must be atmost ${max} letters.`);
    }else{
        showSuccess(input);
    }
}
//check both the password are same
function checkSame(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`Password is not matching`);
    }
}
//Event listner
form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,18);
    checkValidEmail(email);
    checkSame(password,password2);
});