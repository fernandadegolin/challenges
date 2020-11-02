/* 
    1)
    UF - obrigatorio
    
    CRM - obrigatorio 
    CRM - só números

    2)
    Alerta de campos obrigatorios

    3)
    Validação de todos os campos 
        > clicar em continue 
            > redirecionar para Huia

*/


const btn = document.getElementById('btn');
    btn.addEventListener ('click', validação);


function validação (){
    let crm = document.getElementById ('crm').value;
    let uf = document.getElementById ('uf').value;

    if (crm === '' || uf === '') {
        alert ('Olá, para prosseguir com sua compra é necessário o preenchimento de todos os campos!');
    } else {
        window.location.href = 'https://huia.com.br/';
    }
}

    







