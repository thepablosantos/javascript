<<<<<<< HEAD
// Seleciona o formulário HTML com o id "meuFormulario"
let formulario = document.getElementById("meuFormulario");

// Função que será executada quando o formulário for submetido
function enviar(event) {
    // Previne o comportamento padrão de submissão do formulário (que recarregaria a página)
    event.preventDefault();

    // Captura o valor do campo de entrada com id "nome"
    let nome = document.getElementById("nome").value;

    // Captura o valor do campo de entrada com id "email"
    let email = document.getElementById("email").value;

    // Seleciona o elemento onde o erro do nome será exibido
    let erroNome = document.getElementById("erro-nome");
    // Limpa qualquer mensagem de erro anterior
    erroNome.textContent = "";

    // Seleciona o elemento onde o erro do email será exibido
    let erroEmail = document.getElementById("erro-email");
    // Limpa qualquer mensagem de erro anterior
    erroEmail.textContent = "";

    // Exibe no console os valores capturados de "nome" e "email"
    console.log("nome", nome);
    console.log("email", email);

    // Verifica se o nome tem 3 caracteres ou menos
    if (nome.length <= 3) {
        // Se for o caso, exibe uma mensagem de erro e interrompe o processo de submissão
        erroNome.textContent = "O nome precisa ter mais de 3 caracteres";
        return;
    }

    // Verifica se o email contém o caractere "@", que é obrigatório em emails válidos
    if (!email.includes("@")) {
        // Se o email for inválido, exibe uma mensagem de erro e interrompe o processo de submissão
        erroEmail.textContent = "O email é inválido";
        return;
    }

    // Se não houver erros, submete o formulário
    formulario.submit();
}

// Adiciona um "ouvinte" de eventos ao formulário, que chama a função "enviar" ao tentar submeter
formulario.addEventListener("submit", enviar);
=======
// Declaração condicional: if-else
let idade = 18; // Declara uma variável "idade" e atribui o valor 18

if (idade > 18) { // Verifica se a idade é maior que 18
    console.log("Maior de Idade"); // Se for, imprime "Maior de Idade"
} else {
    console.log("Menor de idade"); // Se não for, imprime "Menor de idade"
}

// Declaração condicional: switch
let diaSemana = 5; // Declara uma variável "diaSemana" e atribui o valor 5

switch (diaSemana) { // Avalia o valor de "diaSemana"
    case 1:
        console.log("Segunda-feira"); // Se for 1, imprime "Segunda-feira"
        break;
    case 2:
        console.log("Terça-feira"); // Se for 2, imprime "Terça-feira"
        break;
    case 3:
        console.log("Quarta-feira"); // Se for 3, imprime "Quarta-feira"
        break;
    default:
        console.log("Outro dia da semana"); // Se não for nenhum dos anteriores, imprime "Outro dia da semana"
}

// Laços de repetição

// Laço for: executa um bloco de código um número específico de vezes
for (let i = 0; i < 5; i++) { // Inicializa "i" em 0, e continua enquanto "i" for menor que 5
    console.log(i); // Imprime o valor de "i"
}

// Laço while: executa um bloco de código enquanto a condição for verdadeira
let contador = 1; // Declara uma variável "contador" e atribui o valor 1
console.log('while'); // Imprime "while"
while (contador < 6) { // Continua enquanto "contador" for menor que 6
    console.log(contador); // Imprime o valor de "contador"
    contador++; // Incrementa "contador" em 1 a cada iteração
}

// Laço do-while: executa um bloco de código pelo menos uma vez e depois verifica a condição
let contador2 = 6; // Declara uma variável "contador2" e atribui o valor 6
console.log('contador2'); // Imprime "contador2"

do {
    console.log(contador2); // Imprime o valor de "contador2"
    contador2++; // Incrementa "contador2" em 1 a cada iteração
} while (contador2 < 6); // Continua enquanto "contador2" for menor que 6

// Funções

// Declaração de função: define uma função que soma dois números
function soma(a, b) { 
    return a + b; // Retorna a soma de "a" e "b"
}

let resultado = soma(5, 5); // Chama a função "soma" com os argumentos 5 e 5, e armazena o resultado em "resultado"

console.log("soma = ", resultado); // Imprime o resultado da soma

// Eventos

// Adiciona um ouvinte de eventos ao elemento com o ID "meuBotao" que responde ao evento de clique
document.getElementById("meuBotao")
    .addEventListener("click", function() {
        console.log("Ação do evento de click"); // Imprime "Ação do evento de click" quando o botão é clicado
    });
>>>>>>> cd602d8f4ac8188bf394e603a6ab5131e60b2520
