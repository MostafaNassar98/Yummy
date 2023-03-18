let inputName = document.querySelector('.input-name');
let alertname = document.querySelector('.alert-name');

function validationName(){
    var regux = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

    if (regux.test(inputName.value) == false) {
        alertName.classList.remove('d-none');
        $('.form-control').eq(0).addClass('false');
        $('.form-control').eq(0).removeClass('true');
        $('.red').eq(0).removeClass('d-none')
        $('.green').eq(0).addClass('d-none')
        return false;


    } else {
        alertname.classList.add('d-none');
        $('.form-control').eq(0).removeClass('false');
        $('.form-control').eq(0).addClass('true');
        $('.red').eq(0).addClass('d-none')
        $('.green').eq(0).removeClass('d-none')
        alertName.classList.add('d-none');
        return true;



    }
}
inputName.addEventListener('input',validationName);




let inputEmail = document.querySelector('.input-email');
let alertmail = document.querySelector('.alert-email');

function validationEmail(){
    var regux = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (regux.test(inputEmail.value) == false) {
        alertmail.classList.remove('d-none');
        $('.form-control').eq(0).addClass('false');
        $('.form-control').eq(0).removeClass('true');
        $('.red').eq(0).removeClass('d-none')
        $('.green').eq(0).addClass('d-none')
        return false;


    } else {
        alertmail.classList.add('d-none');
        $('.form-control').eq(0).removeClass('false');
        $('.form-control').eq(0).addClass('true');
        $('.red').eq(0).addClass('d-none')
        $('.green').eq(0).removeClass('d-none')
        alertmail.classList.add('d-none');
        return true;



    }
}
inputEmail.addEventListener('input',validationEmail);



let inputPhone = document.querySelector('.input-phone');
let alertphone = document.querySelector('.alert-phone');

function validationPhone(){
    var regux = /^01[0152][0-9]{8}$/;

    if (regux.test(inputPhone.value) == false) {
        alertphone.classList.remove('d-none');
        $('.form-control').eq(0).addClass('false');
        $('.form-control').eq(0).removeClass('true');
        $('.red').eq(0).removeClass('d-none')
        $('.green').eq(0).addClass('d-none')
        return false;


    } else {
        alertphone.classList.add('d-none');
        $('.form-control').eq(0).removeClass('false');
        $('.form-control').eq(0).addClass('true');
        $('.red').eq(0).addClass('d-none')
        $('.green').eq(0).removeClass('d-none')
        alertphone.classList.add('d-none');
        return true;



    }
}
inputPhone.addEventListener('input',validationPhone);



let inputAge = document.querySelector('.input-age');
let alertage = document.querySelector('.alert-age');

function validationAge(){
    var regux = /^(1[89]|[2-9]\d)$/;

    if (regux.test(inputAge.value) == false) {
        alertage.classList.remove('d-none');
        $('.form-control').eq(0).addClass('false');
        $('.form-control').eq(0).removeClass('true');
        $('.red').eq(0).removeClass('d-none')
        $('.green').eq(0).addClass('d-none')
        return false;


    } else {
        alertage.classList.add('d-none');
        $('.form-control').eq(0).removeClass('false');
        $('.form-control').eq(0).addClass('true');
        $('.red').eq(0).addClass('d-none')
        $('.green').eq(0).removeClass('d-none')
        alertage.classList.add('d-none');
        return true;



    }
}
inputAge.addEventListener('input',validationAge);




let inputPassword = document.querySelector('.input-password');
let alertpassword = document.querySelector('.alert-password');

function validationPassword(){
    var regux = /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/;

    if (regux.test(inputPassword.value) == false) {
        alertpassword.classList.remove('d-none');
        $('.form-control').eq(0).addClass('false');
        $('.form-control').eq(0).removeClass('true');
        $('.red').eq(0).removeClass('d-none')
        $('.green').eq(0).addClass('d-none')
        return false;


    } else {
        alertpassword.classList.add('d-none');
        $('.form-control').eq(0).removeClass('false');
        $('.form-control').eq(0).addClass('true');
        $('.red').eq(0).addClass('d-none')
        $('.green').eq(0).removeClass('d-none')
        alertpassword.classList.add('d-none');
        return true;



    }
}
inputPassword.addEventListener('input',validationPassword);

let inputRepassword = document.querySelector('.input-repassword');
let alertrepassword = document.querySelector('.alert-repassword');

function validationRepassword(){
    if(inputPassword.value !== inputRepassword.value){
        alertRepassword.classList.remove('d-none');
        $('.form-control').eq(5).addClass('false');
        $('.form-control').eq(5).removeClass('true');
        $('.red').eq(5).removeClass('d-none')
        $('.green').eq(5).addClass('d-none')
        return false;
    }
    else{
        alertRepassword.classList.add('d-none');
        $('.form-control').eq(5).removeClass('false');
        $('.form-control').eq(5).addClass('true');
        $('.red').eq(5).addClass('d-none')
        $('.green').eq(5).removeClass('d-none')
        alertRepassword.classList.add('d-none');
        return true;
    }
}
inputRepassword.addEventListener('input',validationRepassword);

var inputs = document.querySelectorAll('input');
for(var i=0 ; i<inputs.length ; i++){
    if(inputs[i].value==""){
        $('.btn').attr("disabled",true)
    }
    else if(validationName()==true && validationEmail()==true && validationPhone()==true && validationAge==true && validationPhone==true && validationPassword==true && validationRepassword==true){
        $('.btn').removeAttr('d-none')
    }
}

