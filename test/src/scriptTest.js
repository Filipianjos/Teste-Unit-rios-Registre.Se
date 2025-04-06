function validateCPF(cpf){

    return cpf.length >= 11 && cpf.length <= 14;
}

function validateEmail(email){
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
}

function validateCadastro(nome, email, cpf, phone, address, cep, city, uf, age, password){
    if (!nome || !email || !cpf || !password || !validateEmail(email) || !validateCPF(cpf) || password.length < 6 || password.length > 8){
        return false
    }
    return true;

};