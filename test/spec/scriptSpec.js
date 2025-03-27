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

    });

});