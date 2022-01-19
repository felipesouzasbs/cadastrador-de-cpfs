const CPF = require('cpf');
const fs = require('fs');
console.log("Seja bem vindo cadastrador de CPFs");

var cpf = process.argv[2]

let cpfValido = CPF.isValid(cpf)

if(cpfValido) {
    console.log("CPF valido")
    fs.writeFileSync('dados.txt', cpf + '\n', {flag: 'a'});
} else {
    console.log("CPF invalido")
}

console.log("FIM");