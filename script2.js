document.addEventListener('DOMContentLoaded', () => {

    let inputAdresse = document.querySelector('.adresse>input');
    let inputcp = document.querySelector('.cp>input');
    let inputville = document.querySelector('.ville>input');
    let list_adresse = document.querySelector(".list_adresse");
    let allAdresses = document.querySelectorAll('ul>li');

    inputAdresse.addEventListener('input', afficherVilles);

    function getInfos(adresse) {
        let url = "https://api-adresse.data.gouv.fr/search/?q=";
        let words = adresse.split(' ');
        let param = "";

        words.forEach(element => {
            if (param === "") {
                param = element;
            } else {
                param = param + '+' + element;
            }
        });

        let promise = new Promise((resolve, reject) => {
            window.fetch(url + param)
                .then(response => response.json())
                .then(infos => {
                    if (infos.features.length !== 0) {
                        let informations = [];
                        infos.features.forEach(element => {
                            let {properties: {city},properties: {postcode},properties: {name},properties: {label}} = element;
                            informations.push({city,postcode,name,label});
                            resolve(informations);
                        });
                    }

                })
                .catch(error => reject(error));
        });
        return promise;
    }


    function afficherVilles(e) {
        console.log("test");
        inputcp.value = "";
        inputville.value = "";
        // list_adresse.innerHTML = "";
        getInfos(e.target.value).then(response => {
            response.forEach(element => {
                list_adresse.insertAdjacentHTML("afterbegin","<li class='adresse' data-cp='"+element.postcode+"' data-city='"+element.city+"' data-name='"+element.name+"'>"+element.label+"</li>");
            });
            let adresse = document.querySelectorAll('.adresse');
            if(adresse.length !== 0){
                adresse.forEach(elt => {
                    elt.addEventListener('click', (e)=>{
                        list_adresse.innerHTML = "";
                        let target = e.target;
                        inputcp.value = target.dataset.cp;
                        inputville.value = target.dataset.city;
                        inputAdresse.value = target.dataset.name;
                    })
                })
            }
        }).catch(error => console.log(error));
    }
});