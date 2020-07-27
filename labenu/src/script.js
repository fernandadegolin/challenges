// 1) Validar email 
//  1.1) Alert de email invalido 
//  1.2) Alert de email enviado com sucesso
//    1.1.1) Mensagem "Damos boas vindas a:$(email)

function validacao() {

    let validarEmail = document.getElementById('email').value;
    let mensagemBoasVindas = document.getElementById('boasVindas');

    if (validarEmail == "" || validarEmail.indexOf('@') == -1 || validarEmail.indexOf('.') == -1) {
        alert('Email inválido, por favor digite novamente');

    } else {
        mensagemBoasVindas.innerHTML = `Damos Boas Vidas a ${validarEmail}`;
        alert(`Email: ${validarEmail} enviado com sucesso.`)
    }

    document.getElementById('email').value = ''; // Quando o email é enviado, retorna o valor vazio.
}


// 2) Click Menu

/* MODELO 1 */
let alertaPagina = document.querySelector('.home').addEventListener('click', construcao);

function construcao() {
    alert('Página em construção');
}

/* MODELO 2 */
//Usando o evento onclick no html


