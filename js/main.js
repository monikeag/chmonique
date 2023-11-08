function ampliarImagem() {
    return alert("Não temos como ampliar essa imagem no momento, volte mais tarde :D")
}

let cepUsuario = document.getElementById('cep');
let btnBuscarCep = document.getElementById('btnCep');

btnBuscarCep.onclick = () => {
    let inputCep = cepUsuario.value;

    fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
        .then(response => response.json())
        .then(response => exibirConsultaCep(response));
}

function exibirConsultaCep(cep) {
    let cepInfoSection = document.getElementById('cep-info');
    cepInfoSection.innerHTML = '';

    let logradouro = document.createElement('p');
    logradouro.innerText = "Endereço: "+ cep.logradouro;

    let bairro = document.createElement('p');
    bairro.innerText = "Bairro: " +cep.bairro;

    let localidade = document.createElement('p');
    localidade.innerText = "Cidade: " + cep.localidade;

    let uf = document.createElement('p');
    uf.innerText = "Estado: " + cep.uf;

    cepInfoSection.append(logradouro, bairro, localidade, uf);
}
