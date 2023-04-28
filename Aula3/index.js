/*console.log("Olá Mundo!");


//sempre declarar variaveis com let ou const
let nome = "Rainan";
const idade = 28;
let isRunnig = false;
const pessoa ={

    nome: "Rainan",
    idade: 28,
    Profissao: "Aluno"
}
  

// array=vetor pode misturar tipos diferentes

console.log("Seu nome é: " +  nome + ". E sua idade é: " + idade);// jeito mais facil template exempl let frase 1
console.log(typeof nome);//mostra o tipo de variavel= typeof + nome da variavel

let frase1 = `Meu nome é ${pessoa.nome};. Eu tenho ${pessoa.idade} anos!`;
console.log(frase1);

const pessoa = {
  nome: "Rainan",
  idade: 28,
  Profissao: "Aluno",
};

if (pessoa.idade <= 0) {
  console.log("Você ainda não nasceu");
} else if (pessoa.idade >= 18) {
  console.log(`A pessoa de nome ${pessoa.nome} é maior de idade`);
} else {
  console.log("Menor de idade");
}

switch (pessoa.idade) {
  case 20:
    console.log("20 anos");
    break;
  case 30:
    console.log("30 anos");
    break;
  default:
    console.log("Idade desconhecida");
    break;
}

//Operador ternário
pessoa.idade >= 18
  ? console.log("Maior de idade")
  : console.log("Menor de idade"); //forma resumida de fazer um if/else(se senao)

//Estruturas de repetição - FOR - WHILE E DO WHILE
for (let index = 0; index < 0; index++) {
  console.log(index);
}

let count = 0;
let count1 = 0;
while (count < 5) {
  console.log(count);
  count++;
}

do {
  console.log(count1);
} while (count < 3);*/


//Funções

function imprimeoi(){
    console.log("Olá")
}

function imprime(frase){
    console.log(frase);
}

imprimeoi();
imprime("Olá! Função com parametro");

function soma(num1, num2){
    let resultado = num1 + num2;
    return resultado;

}

console.log("Resultado da soma: " + soma(1,5));
console.log("Resultado da soma: " + soma(89,12));