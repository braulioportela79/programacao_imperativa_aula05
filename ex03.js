console.log(Math.random());

function cumprimentar(nome = 'Braulio') {
    console.log(`Olá ${nome}, seja bem vindo!`);
};

cumprimentar();

function cumprimentarA(nome) {
    const mensagem = "Olá, seja bem vindo! "
    console.log(mensagem + nome);
}

cumprimentarA("William");
cumprimentarA("Danilo");

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
}
multiplicarPorDoisESomarCinco(1)
multiplicarPorDoisESomarCinco(5)
// multiplicarPorDoisESomarCinco(Erick) // Erick não é um número 
const Erick = 5
multiplicarPorDoisESomarCinco(Erick) //agora sim

console.log(multiplicarPorDoisESomarCinco(1));