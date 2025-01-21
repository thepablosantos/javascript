function verificarSenha(senha) {
    // Verificar se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        throw new Error("A senha deve ter pelo menos 8 caracteres.");
    }

    // Verificar se a senha contém pelo menos um número
    if (!/\d/.test(senha)) {
        throw new Error("A senha deve conter pelo menos um número.");
    }

    // Verificar se a senha contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
        throw new Error("A senha deve conter pelo menos uma letra maiúscula.");
    }

    // Se todos os requisitos forem atendidos
    return "Senha válida!";
}

// Testando a função com try-catch
try {
    const senha = "Senha123"; // Teste com diferentes valores, como "abc", "12345678", "senhaforte1"
    const resultado = verificarSenha(senha);
    console.log(resultado); // Exibe "Senha válida!" se a senha atender aos critérios
} catch (error) {
    console.error("Erro:", error.message); // Exibe o motivo pelo qual a senha falhou
}