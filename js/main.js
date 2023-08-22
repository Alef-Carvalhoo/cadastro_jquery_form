$(document).ready(function() {

    $('#Telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {

            nome: {
                required: true
            },
            
            email: {
                required: true ,
                email: true
            },

            Telefone: {
                required: true
            },

            cpf: {
                required: true
            },
            endereco: {
                required: true
            },

            complemento: {
                required: true
            },

            cep: {
                required: true
                
            }
        },
        
        submitHandler: function(form) {
            console.log(form)
            alert('usuário cadastrado com sucesso!')
        },
        
    });
})