//let titulo = document.querySelector ("h1");
//titulo.innerHTML = "Bem vindos ao Jogo do Número Secreto";

//let paragrafo = document.querySelector ("p");
//paragrafo.innerHTML = `Escolha um número de 1 a ${numeroMaximo}.`;

/* Aqui abaixo o professor explica que podemos pegar os dois códigos acima e trnsformar num comando mais conciso
levando em conta que não necessitamos escrever tantos lets. Por isso ele coloca a function com um novo comando, e
demonstra dentro das chaves que a tag e o texto é que diferem */
let listaDeNumerosSorteados = [];
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1
exibirMensagemInicial ();

//Esta function realiza o código, mas não obtém o retorno na tela do que foi feito
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}
exibirTextoNaTela ("h1", "Bem vindos ao Jogo do Número Secreto!");
exibirTextoNaTela ("p", "Escolha um número entre 1 e 10.");

function exibirMensagemInicial () {
    exibirTextoNaTela ("h1", "Bem vindos ao Jogo do Número Secreto!");
    exibirTextoNaTela ("p", "Escolha um número entre 1 e 10.");
}


/*Quando eu uso o comando return dentro da função, estou dizendo que tenhamos o controle em algum local, que no caso
defini no console.log a frente*/
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt (Math.random() * limiteNumero + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == limiteNumero) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push (numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo () {
    chute = document.querySelector ("input");
    chute.value = "";
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById ("reiniciar").setAttribute ('disabled', true);
}

function verificarChute() {
    let chute = document.querySelector ("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela ("h1", "Você acertou!");
        let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
        let mensagemTentativas = `Você descobriu o Número Secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ("p", mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ("p", `O Número Secreto é menor.`);
    } else {
        exibirTextoNaTela ("p", `O Número Secreto é maior.`);
    }
    tentativas++
    limparCampo ()
    console.log (chute == numeroSecreto);
}
}