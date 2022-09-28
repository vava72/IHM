function VerifPassword() {
    var psw = document.getElementById("psw");
    var confirmpsw = document.getElementById("confirmPsw")
    if (x.type === "password" && y.type === "password") {
        psw.type = "text";
        confirmpsw.ype = "text";
    } else {
        psw.type = "password";
        confirmpsw.type = "password";
    }
  }

let id = document.getElementById('id');
let loginForm = document.getElementById('inscri-form');
let errorID = document.getElementById('errorID');

id.addEventListener('input', function(evt){
    console.log(evt.target.value);
    let patternID1= /^[A-Z][a-z]*$/;
    let patternID2 = /^.{5,8}$/;
    let currentvalue = evt.target.value;
    let idValide = patternID1.test(currentvalue);
    let idLength = patternID2.test(currentvalue);

    console.log(idLength);

    if(idValide == false){
        errorID.style.display = "block";
        id.style.borderColor = "red";
    } else {
        errorID.style.display = "none";
        id.style.borderColor = "green";
    } 
    if(idLength == false){
        errorID.style.display = "block";
        id.style.borderColor = "red";
    }

})

let nom = document.getElementById('nom');
let errorNom = document.getElementById('errorNom');

nom.addEventListener('input', function(evt){
    console.log(evt.target.value);
    let patternName= /^[A-Z a-z]*$/;
    let currentvalue = evt.target.value;
    let idValide = patternName.test(currentvalue);

    if(idValide == false){
        errorNom.style.display = "block";
        nom.style.borderColor = "red";
    } else {
        errorNom.style.display = "none";
        nom.style.borderColor = "green";
    } 
})

let prenom = document.getElementById('prenom');
let errorPrenom = document.getElementById('errorPrenom');

prenom.addEventListener('input', function(evt){
    console.log(evt.target.value);
    let patternID1= /^[A-Z a-z]*$/;
    let currentvalue = evt.target.value;
    let idValide = patternID1.test(currentvalue);

    if(idValide == false){
        errorPrenom.style.display = "block";
        prenom.style.borderColor = "red";
    } else {
        errorPrenom.style.display = "none";
        prenom.style.borderColor = "green";
    } 
})

let mail = document.getElementById('mail');
let errormail = document.getElementById('errormail');

mail.addEventListener('input', function(evt){
    console.log(evt.target.value);
    let patternID1= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let currentvalue = evt.target.value;
    let mailValide = patternID1.test(currentvalue);

    if(mailValide == false){
        errormail.style.display = "block";
        mail.style.borderColor = "red";
    } else {
        errormail.style.display = "none";
        mail.style.borderColor = "green";
    } 
})

let mailConfirm = document.getElementById('confirmMail');
let errorConfirmMail = document.getElementById('errorConfirmMail');

mailConfirm.addEventListener('input', function(evt){
    if(mailConfirm.value == mail.value){
        errorConfirmMail.style.display = "none";
        mailConfirm.style.borderColor = "green";
    } else {
        errorConfirmMail.style.display = "block";
        mailConfirm.style.borderColor = "red";
    }
})

let password = document.getElementById('psw');
let errorPSW = document.getElementById('errorPSW');

password.addEventListener('input', function(evt){
    let patternPSW= /^(?=.*?[0-9])[A-Za-z0-9]{5,12}$/;
    let currentvalue= evt.target.value;
    console.log(evt.target.value);
    let pswValide = patternPSW.test(currentvalue);

    if(pswValide == false){
        errorPSW.style.display = "block";
        password.style.borderColor = "red";
    } else {
        errorPSW.style.display = "none";
        password.style.borderColor = "green";
    }
})

let passwordConfirm = document.getElementById('confirmPsw');
let errorConfirmPSW = document.getElementById('errorConfPSW');

passwordConfirm.addEventListener('input', function(evt){
    if(passwordConfirm.value == password.value){
        errorConfirmPSW.style.display = "none";
        passwordConfirm.style.borderColor = "green";
    } else {
        errorConfirmPSW.style.display = "block";
        passwordConfirm.style.borderColor = "red";
    }
})