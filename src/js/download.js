// Função para gerar o arquivo .txt e permitir o download
function downloadUserData(user) {
    const userData = `
    Nome: ${user.name}
    E-mail: ${user.email}
    CPF: ${user.cpf}
    Telefone: ${user.phone || 'Não fornecido'}
    Endereço: ${user.address || 'Não fornecido'}
    CEP: ${user.cep || 'Não fornecido'}
    Cidade: ${user.city || 'Não fornecido'}
    UF: ${user.uf || 'Não fornecido'}
    Idade: ${user.age || 'Não fornecido'}
    `;

    // Criação de um Blob com os dados em formato de texto
    const blob = new Blob([userData], { type: 'text/plain' });

    // Criação de um link para o download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `cadastro_usuario_${user.name.replace(/\s+/g, '_')}.txt`; // Nome do arquivo

    // Aciona o download
    link.click();
}
