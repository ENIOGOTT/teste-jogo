// let titulo = document.querySelector('H1');
// titulo.innerHTML = 'Jogo do Numero Secreto.'; 

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero de 1 a 100.';
let listaNumeroSorteados = [];
let numeroLimite = 10; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rat:1.2});
    // Pro responsive voice funcionar precisa registrar email, e acessar ID
}

function exibirMensagemInicial(){ 
    exibirTextoNaTela('h1', 'Game do Nº Secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}
    exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O Numero Secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listaNumeroSorteados = []; 
    }
    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled',true); 
}