const mdp = document.getElementById("psw");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", toggleClicked);

function toggleClicked() {  
    mdp.classList.toggle("visible");
    if (this.checked) {
        mdp.type = "text";
    } else {
        mdp.type = "password";
    }
  }

const mdpconfirm = document.getElementById("confirmPsw");
const togglePasswordConf = document.getElementById("toggle-passwordConfirm");

togglePasswordConf.addEventListener("click", toggleConfClicked);

function toggleConfClicked() {  
    mdpconfirm.classList.toggle("visible");
    if (this.checked) {
        mdpconfirm.type = "text";
    } else {
        mdpconfirm.type = "password";
    }
  }


let id = document.getElementById('id');
let loginForm = document.getElementById('inscri-form');
let errorID = document.getElementById('errorID');

id.addEventListener('input', function(evt){
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

let mail = document.getElementById('mail');
let errormail = document.getElementById('errormail');

mail.addEventListener('input', function(evt){
    let patternMail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let currentvalue = evt.target.value;
    let mailValide = patternMail.test(currentvalue);

    if(mailValide == false ){
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

    if(pswValide == false && password.value != passwordConfirm.value){
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

//Partie pour l'adresse, tutoriel suivi ici afin d'apprendre : "https://monpetitdev.fr/javascript-comment-mettre-en-place-une-saisie-dadresse-predictive-gratuitement/"

var requestURL = 'https://api-adresse.data.gouv.fr/search/?q=';
var select = document.getElementById("selection");
window.onload = function() {
    document.getElementById("adresse").addEventListener("input", autocompleteAdresse, false);
};
function autocompleteAdresse() {
    var inputValue = document.getElementById("adresse").value;
    if (inputValue) {
        fetch(setQuery(inputValue))
            .then(function (response) {
                response.json().then(function (data) {
                    displaySelection(data);
                });
            });
    } else {
        select.style.display = "none";
    }
};
function displaySelection(response) {
    if (Object.keys(response.features).length > 0) {
        select.style.display = "block";
        select.removeChild(select.firstChild);
        var ul = document.createElement('ul');
        select.appendChild(ul);
        response.features.forEach(function (element) {
            var li = document.createElement('li');
            var ligneAdresse = document.createElement('span');
            var infosAdresse = document.createTextNode(element.properties.postcode + ' ' + element.properties.city);
            ligneAdresse.innerHTML = element.properties.name;
            li.onclick = function () { selectAdresse(element); };
            li.appendChild(ligneAdresse);
            li.appendChild(infosAdresse);
            ul.appendChild(li);
        });
    } else {
        select.style.display = "none";
    }
}
function selectAdresse(element) {
    document.getElementById("adresse").value = element.properties.name + "\r\n" + element.properties.postcode + " " + element.properties.city;
    select.style.display = "none";
    document.getElementById("resAdresse").value = element.properties.name;
    document.getElementById("CP").value = element.properties.postcode;
    document.getElementById("Ville").value = element.properties.city;
}
function setQuery(value) {
    return requestURL + value + "?type=housenumber&autocomplete=1";
}