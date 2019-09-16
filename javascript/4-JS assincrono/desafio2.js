var inputElement = document.querySelector('input');
var listaElement = document.querySelector('#lista');

function consultar() {

    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then(function (response) {
            mostrarLista(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function addItem(repo) {
    var liElement = document.createElement('li');
    var nomeElement = document.createTextNode(repo);

    liElement.appendChild(nomeElement);
    listaElement.appendChild(liElement);
}

function mostrarLista(repos) {
    listaElement.innerHTML = '';

    for (repo of repos) {
        addItem(repo.name);
        console.log(repo.name);
    }
}