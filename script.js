/*console.log("Aqui está um texto");

let nome = "Jailson", idade = 33;

console.log('Seu nome é $(nome) e sua idade é $(idade) anos);*/

/*
let suaidade = prompt("Sua idade: ");

if (suaidade >= 18){
    console.log("Você pode entrar!");
} else {
    console.log("Acesso negado");
}
*/

/*
function pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
    return console.log('Olá $(nome), sua idade é $(idade). \n Seja bem vindo!');
}

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");

pessoa(nome, idade);
*/

/*
let numero = 20;

function parImpar (numero)
{
    if (numero % 2 == 0)
    {
        let numero = 10;
        console.log("É par!");
        console.log(numero);
    }
    else
    {
        console.log("É impar!");
    }
}

parImpar(numero);
console.log(numero);
*/

//Function Arrow

const potencia = (numero) => {
    return numero * numero;
}

/*
function potencia (numero)
{
    return numero * numero;
}
*/

console.log(potencia(8));