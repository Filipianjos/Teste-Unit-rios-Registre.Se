// Função para criptografar a senha
function encryptPassword(password) {
    return btoa(password); // Utiliza base64 para simplificação
}

// Função para validar CPF (simples, sem validação completa de CPF)
function validateCPF(cpf) {
    return cpf.length >= 11 && cpf.length <= 14;
}

// Função para validar o E-mail
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
}

// Função para realizar o cadastro do usuário
document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cep = document.getElementById('cep').value;
    const city = document.getElementById('city').value;
    const uf = document.getElementById('uf').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;

    // Validação de campos obrigatórios
    if (!name || !email || !cpf || !password || !validateEmail(email) || !validateCPF(cpf) || password.length < 6 || password.length > 8) {
        alert("Preencha todos os campos obrigatórios corretamente.");
        return;
    }

    const userId = Date.now(); // ID único do usuário, utilizando o timestamp

    const user = {
        id: userId,
        name: name,
        email: email,
        cpf: cpf,
        phone: phone,
        address: address,
        cep: cep,
        city: city,
        uf: uf,
        age: age,
        password: encryptPassword(password)
    };

    // Armazenar os dados do usuário no cache (localStorage)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    downloadUserData(user);
    alert("Usuário cadastrado com sucesso!");
    window.location.reload(); // Para resetar o formulário
});

// Função para realizar login do usuário
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === encryptPassword(password));

    if (user) {
        sessionStorage.setItem('user', JSON.stringify(user)); // Armazenar usuário logado na sessão
        alert("Login bem-sucedido!");
        window.location.reload();
    } else {
        alert("Credenciais inválidas.");
    }
});

// Função para mostrar o painel do usuário se logado
window.onload = function() {
    const userPanel = document.getElementById('user-panel');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout');

    const loggedUser = sessionStorage.getItem('user');

    if (loggedUser) {
        userPanel.style.display = 'block';
        registerForm.style.display = 'none';
        loginForm.style.display = 'none';
    } else {
        userPanel.style.display = 'none';
        registerForm.style.display = 'block';
        loginForm.style.display = 'block';
    }

    // Logout
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            sessionStorage.removeItem('user');
            alert("Você foi deslogado.");
            window.location.reload();
        });
    }
};
