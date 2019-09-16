function toString(usuarios) {
    for (const usuario of usuarios) {
        console.log(`O ${usuario.nome} possui as habilidades: ${(usuario.habilidades.length > 0) ? usuario.habilidades.join(', ') : "Nenhuma Habilidade"}`)
    }
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    },
    {
        nome: "Teste",
        habilidades: []
    }
];

//#############################

toString(usuarios)
