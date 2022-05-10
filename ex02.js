// 1 - Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function convertePolegadas(x) {
    return x * 2.54;
};

let polegadas = 15;

console.log(`-------------------------------------`);
console.log(`Convertendo polegadas em centímetros:`);
console.log(`${polegadas} polegadas = ${convertePolegadas(polegadas)} centrímetros`);
console.log(`-------------------------------------`);

// 2 - Crie uma função que receba uma string e a converta em um URL.

function converteUrl(x) {
    return `http://www.${x.toLowerCase().replaceAll(/\s/g, '')}.com.br`;
};

let textoEx2 = 'DIGITAL HOUSE';

console.log(`Convertendo texto digitado em URL:`);
console.log(`Texto digitado: ${textoEx2}`);
console.log(`URL: ${converteUrl(textoEx2)}`);
console.log(`-------------------------------------`);

// 3 - Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function inserirExclamacao(x) {
    return `${x}!`;
};

let textoEx3 = `JavaScript é muito legal`;

console.log(`Inserindo exclamação (!) ao texto digitado:`);
console.log(`Texto digitado: ${textoEx3}`);
console.log(`Texto final: ${inserirExclamacao(textoEx3)}`);
console.log(`-------------------------------------`);

// 4 - Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function converteIdadeCachorro(x) {
    return `${x * 7}`;
};

let idadeCachorro = 5;

console.log(`Convertendo idade do cachorro em idade de humano:`);
console.log(`Idade digitada do cachorro: ${idadeCachorro} anos`);
console.log(`Idade do cachorro em idade de humano: ${converteIdadeCachorro(idadeCachorro)} anos`);
console.log(`-------------------------------------`);

// 5 - Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal. PS: considere que você trabalhe 160 horas no mês.

function valorHoraTrabalho(x, y) {
    return `${parseFloat(x / y).toFixed(2)}`;
};

let salario = 8100.00;
let horasTrabalhadas = 160;

console.log(`Calculando o valor da hora de trabalho:`);
console.log(`Horas de trabalho no mês: ${horasTrabalhadas} horas`);
console.log(`Salário no mês: R$${parseFloat(salario).toFixed(2)}`);
console.log(`Você recebe: R$${valorHoraTrabalho(salario, horasTrabalhadas)} por hora`);
console.log(`-------------------------------------`);

// 6 - Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

function calcImc(x, y) {
    return `${x / (y / 100 * y / 100)}`;
};

let altura = 160;
let peso = 75;

console.log(`Calculando o IMC:`);
console.log(`Altura: ${altura}cm`);
console.log(`Peso: ${peso}kg`);
console.log(`IMC: ${parseFloat(calcImc(peso, altura)).toFixed(2)}`);
console.log(`-------------------------------------`);

// 7 - Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne.

function converterMaiuscula(x) {
    return `${x.toUpperCase()}`;
};

let textoEx7 = `programação imperativa`;

console.log(`Convertendo texto de minúsculo para maiúsculo:`);
console.log(`Texto digitado: ${textoEx7}`);
console.log(`Texto final: ${converterMaiuscula(textoEx7)}`);
console.log(`-------------------------------------`);

// 8 - Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

function tipoParametro(x) {
    return `${typeof x}`;
};

let textoEx8 = true;

console.log(`Retornando o tipo de dado do parâmetro:`);
console.log(`Texto digitado: ${textoEx8}`);
console.log(`O parâmetro é do tipo: ${tipoParametro(textoEx8)}`);
console.log(`-------------------------------------`);

// 9 - Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.

function calcCircunferencia(x) {
    return `${(2 * Math.PI * x).toFixed(2)}`;
};

let raio = 10;

console.log(`Calculando a circunferência do círculo:`);
console.log(`Raio do círculo: ${raio}`);
console.log(`Circunferência do círculo: ${calcCircunferencia(raio)}`);
console.log(`-------------------------------------`);