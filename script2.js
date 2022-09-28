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