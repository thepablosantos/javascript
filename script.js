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