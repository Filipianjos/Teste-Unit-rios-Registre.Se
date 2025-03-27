function validateCPF(cpf){

    return cpf.length >= 11 && cpf.length <= 14;
}

function validateEmail(email){
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
}

