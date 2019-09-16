function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            retorno = (idade > 18) ? resolve(idade) : reject(idade);
        }, 2000);

    });
}

checaIdade(20)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });
