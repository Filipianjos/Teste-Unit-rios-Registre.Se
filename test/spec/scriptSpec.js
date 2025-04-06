describe("Testes do Registre.Se", function(){

    describe("Testes para a função de validar CPF", function(){
    
        it("Deve validar um CPF correto sem traços", function () {
        expect(validateCPF('12345678900')).toBe(true)
        });

        it("Deve validar um CPF correto com traços", function(){
            expect(validateCPF('123.456.789-9')).toBe(true)
        });

        it("Deve invalidar um CPF com menos que 11 caracteres", function(){
        expect(validateCPF('123456789')).toBe(false)
        });

        it("Deve invalidar um CPF com mais que 14 caracteres", function(){
        expect(validateCPF('123456789001'))
        });

    });

    describe("Testes para a função de validar e-mails", function(){

        it("Deve validar um e-mail completo, com @ e  domíno", function(){
            expect(validateEmail('teste15@testeqa.com')).toBe(true)
        });
    
        it("Deve invalidar um e-mail que não contenha o @", function(){
            expect(validateEmail('teste.com')).toBe(false)
        });
    
        it("Deve invalidar um e-mail que não contenha o domínio", function(){
            expect(validateEmail('teste@')).toBe(false)
        });
    
        it("Deve invalidar um e-mail que não contenha @ e nem domínio", function(){
            expect(validateEmail('tese')).toBe(false)
        });

        it("Deve invalidar o e-mail se faltar o '.'", function(){
            expect(validateEmail('teste@segunacom'))
        })

    });

    describe("Teste para a função de validar todos os dados", function(){


        it("Deve validar todos os dados corretamente", function(){
            expect(validateCadastro(
                'João', // nome
                'email@test.com', // email
                '123.456.789-00', // CPF
                '123456789', // telefone
                'Rua Teste', // endereço
                '12345-678', // CEP
                'Cidade Teste', // cidade
                'SP', // UF
                '30', // idade
                'senha123' // senha
            )).toBe(true); 
        });

        it("Deve retornar falso se o email for inválido", function(){
            expect(validateCadastro(
                'João', // nome
                'email-invalido', // email inválido
                '123.456.789-00', // CPF
                '123456789', // telefone
                'Rua Teste', // endereço
                '12345-678', // CEP
                'Cidade Teste', // cidade
                'SP', // UF
                '30', // idade
                'senha123' // senha
            )).toBe(false);
        });

        it("Deve retornar falso se o CPF for inválido", function(){
            expect(validateCadastro(
                'caio', // nome
                'email@testes.com', // email 
                '123456789', // CPF inválido
                '123456789', // Telefone 
                'Rua Teste', // Endereço
                'SP', // Estado
                '25', // idade
                'senhaabc' // senha
            )).toBe(false);
        });
    });

});