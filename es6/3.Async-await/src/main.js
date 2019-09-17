// const minhaPromisse = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });


// async function execute(){
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
// }

// execute();

// import axios from 'axios'

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`)
//             console.log(response)
//         } catch (err) {
//             console.warn(`Erro na API: ${err}`)
//         }
//     }
// }

// Api.getUserInfo('rianperassoli')


//EXERCICIO
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// async function umPorSegundo() {
//     try {
//         await delay() 
//         console.log('1s')

//         await delay() 
//         console.log('2s')

//         await delay() 
//         console.log('3s')
//     } catch (error) {
//         console.warn(`Erro: ${error}`)
//     }
// }

// umPorSegundo();

//EXERCICIO 2
// import axios from 'axios';

// async function getUserFromGithub(user) {

//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`)

//         console.log(response);
//     } catch (err) {
//         console.log('Usuário não existe');
//     }
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');