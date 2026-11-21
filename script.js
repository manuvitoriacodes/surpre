
// PRIMEIRA TELA
function comecar() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("mensagem").style.display = "block";

}


// DECLARAÇÕES SURPRESA
let declaracoes = [

    "Você é uma das melhores coisas que já aconteceram na minha vida. ❤️",

    "Seu sorriso consegue deixar meus dias mais bonitos.",

    "Eu amo cada detalhe seu, até aqueles que você nem percebe.",

    "Obrigada por fazer parte da minha história.",

    "Se eu pudesse escolher novamente, ainda escolheria você. 💗",

    "Meu lugar favorito sempre será ao seu lado."

];

let indice = 0;


// SEGUNDA TELA
function proximaPagina() {

    document.getElementById("mensagem").style.display = "none";

    document.getElementById("declaracoes").style.display = "block";

}


// MOSTRAR DECLARAÇÕES
function mostrarDeclaracao() {

    if (indice < declaracoes.length) {

        document.getElementById("textoDeclaracao").innerText =
            declaracoes[indice];

        indice++;

        document.getElementById("contadorDeclaracoes").innerText =
            indice + " de " + declaracoes.length;

    }

    if (indice === declaracoes.length) {

        document.getElementById("botaoContinuar").style.display = "inline-block";

    }

}


// CONTADOR DE TEMPO
let intervaloContador;

function irParaContador() {

    document.getElementById("declaracoes").style.display = "none";

    document.getElementById("contadorAmor").style.display = "block";

    atualizarContador();

    clearInterval(intervaloContador);

    intervaloContador = setInterval(atualizarContador, 1000);

}


function atualizarContador() {

    const inicio = new Date(2024, 2, 31);

    const agora = new Date();

    let mesesTotais =
        (agora.getFullYear() - inicio.getFullYear()) * 12 +
        (agora.getMonth() - inicio.getMonth());


    function adicionarMeses(data, quantidade) {

        let novaData = new Date(data);

        let diaOriginal = novaData.getDate();

        novaData.setDate(1);

        novaData.setMonth(novaData.getMonth() + quantidade);

        let ultimoDia = new Date(
            novaData.getFullYear(),
            novaData.getMonth() + 1,
            0
        ).getDate();

        novaData.setDate(Math.min(diaOriginal, ultimoDia));

        return novaData;

    }


    if (adicionarMeses(inicio, mesesTotais) > agora) {

        mesesTotais--;

    }


    let anos = Math.floor(mesesTotais / 12);

    let meses = mesesTotais % 12;

    let ultimaData = adicionarMeses(inicio, mesesTotais);

    let diferenca = agora - ultimaData;


    let dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    let horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    let minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    let segundos = Math.floor(
        (diferenca / 1000) % 60
    );


    document.getElementById("anos").innerText = anos;

    document.getElementById("meses").innerText = meses;

    document.getElementById("dias").innerText = dias;

    document.getElementById("horas").innerText = horas;

    document.getElementById("minutos").innerText = minutos;

    document.getElementById("segundos").innerText = segundos;

}


// QUINTA TELA: ÚLTIMA SURPRESA
function mostrarUltimaSurpresa() {

    document.getElementById("contadorAmor").style.display = "none";

    document.getElementById("ultimaSurpresa").style.display = "block";

}


// SEXTA TELA: PEDIDO DE CASAMENTO
function mostrarPedido() {

    document.getElementById("ultimaSurpresa").style.display = "none";

    document.getElementById("pedidoCasamento").style.display = "block";

}


// SÉTIMA TELA: ACEITOU O PEDIDO
function aceitarPedido() {

    document.getElementById("pedidoCasamento").style.display = "none";

    document.getElementById("finalPedido").style.display = "block";

}


// BOTÃO NÃO: FUGINDO DO CLIQUE
const botaoNao = document.getElementById("botaoNao");

const botoesPedido = document.getElementById("botoesPedido");


function fugirDoNao() {

    const largura = botoesPedido.clientWidth - botaoNao.offsetWidth;

    const altura = botoesPedido.clientHeight - botaoNao.offsetHeight;

    const posicaoX = Math.max(0, Math.random() * largura);

    const posicaoY = Math.max(0, Math.random() * altura);

    botaoNao.style.position = "absolute";

    botaoNao.style.left = posicaoX + "px";

    botaoNao.style.top = posicaoY + "px";

}


// Quando o mouse chegar perto, o botão foge
botaoNao.addEventListener("mouseenter", fugirDoNao);


// Quando tentar tocar no celular, o botão foge
botaoNao.addEventListener("touchstart", function(event) {

    event.preventDefault();

    fugirDoNao();

});


// Também foge se tentarem clicar nele
botaoNao.addEventListener("click", fugirDoNao);
