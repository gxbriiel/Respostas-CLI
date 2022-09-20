// DISABLED DUE TO BE USELESS FOR WEBSITES

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const resp_long = "DDEEACCBDAADDAC"

// var respostas = resp_long.split('')
// console.clear();
// console.log(`SISTEMA DE RESPOSTAS\nTOTAL DE QUESTÕES: ${respostas.length}\n`)

// const startup = function() {
//     rl.question('Número da questão: ', function(i) {
//         if(i == 0) {
//             rl.close();
//             return;
//         } else if(i > respostas.length) {
//             console.log('O valor ultrapassa o número de questões.')
//         } else {
//             console.log(`A resposta é o item: ${respostas[i - 1]}`)
//         }
//         startup();
//     })
// }

// rl.on('close', function () {
//     console.log('\nFIM!!!\n');
//     process.exit(0);
// });

// startup();
