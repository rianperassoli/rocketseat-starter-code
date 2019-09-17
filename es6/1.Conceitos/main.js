// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data)
//     }
// }

// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'teste';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// var MinhaLista = new TodoList();

// MinhaLista.mostraUsuario();

// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('Novo todo');
// }


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const newArray = arr.map(function(item, index){
// //     return item + index;
// // });

// // console.log(newArray);

// // const sum = arr.reduce(function(total, next){
// //     return total + next;
// // });

// // console.log(sum);

// // const filter = arr.filter(function(item){
// //     return item % 2 === 0;
// // });

// // console.log(filter);

// // const find = arr.find(function(item){
// //     return item === 4;
// // });

// // console.log(find);


// //arrow function
// const newArray2 = arr.map(item => item * 2);

// console.log(newArray2);

// const teste = () => ({ nome: 'Rian' });

// console.log(teste());


// //funcao com default

// const soma = (a = 3, b = 6) => a + b;

// console.log(soma());
// console.log(soma(4));
// console.log(soma(1, 7));

// // desestruturação
// const usuario = {
//     nome: 'Rian',
//     idade: 27,
//     endereco: {
//         cidade: 'SMO',
//         estado: 'SC'
//     }
// }

// const { nome, idade, endereco: { cidade, estado } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);
// console.log(estado);

// function mostraNome({ nome, idade }) {
//     console.log(nome, idade);
// }

// mostraNome(usuario);

//REST
// const usuario2 = {
//     nome: 'Rian',
//     idade: 27,
//     empresa: 'Legal'
// };

// const { nome, ...resto } = usuario2;

// console.log(nome);
// console.log(resto);

// const arr = [1, 2, 3, 4];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1, 2, 3, 4, 5, 6));

//SPREAD

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const usuario1 = {
//     nome: 'Rian',
//     idade: 27
// };

// const usuario2 = {...usuario1, nome: 'Joao'};

// console.log(usuario1);
// console.log(usuario2);

