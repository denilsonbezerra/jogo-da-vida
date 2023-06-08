let linhas = 20;
let colunas = 75;

const inputLinhas = document.getElementById("input-linhas");

inputLinhas.addEventListener("input", function () {
    linhas = parseInt(inputLinhas.value);

    limparTabuleiro();
});

const inputColunas = document.getElementById("input-colunas");

inputColunas.addEventListener("input", function () {
    colunas = parseInt(inputColunas.value);

    limparTabuleiro();
});

function criarTabuleiro(linhas, colunas) {
    const tabuleiro = [];

    for (let i = 0; i < linhas; i++) {
        const linha = [];

        for (let j = 0; j < colunas; j++) {
            linha.push(0);
        }

        tabuleiro.push(linha);
    }

    return tabuleiro;
}

let tabuleiro = criarTabuleiro(linhas, colunas);
const tabuleiroElemento = document.getElementById("tabuleiro");


function renderizarTabuleiro() {
    let html = "";

    for (let i = 0; i < linhas; i++) {
        html += "<tr>";

        for (let j = 0; j < colunas; j++) {
            const estadoCelula = tabuleiro[i][j] ? "viva" : "morta";
            html += `<td class="celula ${estadoCelula}" onclick="cliqueEmCelula(${i}, ${j})"></td>`;
        }

        html += "</tr>";
    }

    tabuleiroElemento.innerHTML = html;
}

function alterarVivoOuMorto(linha, coluna) {
    tabuleiro[linha][coluna] = tabuleiro[linha][coluna] ? 0 : 1;
}

function cliqueEmCelula(linha, coluna) {
    alterarVivoOuMorto(linha, coluna);
    renderizarTabuleiro();
}

function contarVizinhosVivos(linha, coluna) {
    let contador = 0;

    for (let i = linha - 1; i <= linha + 1; i++) {
        for (let j = coluna - 1; j <= coluna + 1; j++) {
            if (
                i >= 0 &&
                i < linhas &&
                j >= 0 &&
                j < colunas &&
                !(i === linha && j === coluna)
            )
                contador += tabuleiro[i][j];
        }
    }

    return contador;
}

function avancarTabuleiro() {
    const novoTabuleiro = criarTabuleiro(linhas, colunas);

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            const celula = tabuleiro[i][j];
            const vizinhos = contarVizinhosVivos(i, j);

            if (celula === 1 && (vizinhos < 2 || vizinhos > 3))
                novoTabuleiro[i][j] = 0;
            else if (celula === 0 && vizinhos === 3)
                novoTabuleiro[i][j] = 1;
            else novoTabuleiro[i][j] = celula;
        }
    }

    tabuleiro = novoTabuleiro;

    renderizarTabuleiro();
}

let intervalo = null;
const btnIniciar = document.getElementById("btn-iniciar");
const btnAvancar = document.getElementById("btn-avancar");

function iniciarOuParar() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
        btnIniciar.innerHTML = '<i class="fa-solid fa-play"></i> Iniciar';
        btnAvancar.disabled = false;
        inputLinhas.disabled = false;
        inputColunas.disabled = false;
    } else {
        intervalo = setInterval(avancarTabuleiro, 350);
        btnIniciar.innerHTML = '<i class="fa-solid fa-pause"></i> Pausar';
        btnAvancar.disabled = true;
        inputLinhas.disabled = true;
        inputColunas.disabled = true;
    }
}

function avancarGeracao() {
    avancarTabuleiro();
    clearInterval(intervalo);
    intervalo = null;
    btnIniciar.innerHTML = '<i class="fa-solid fa-play"></i> Iniciar';
    btnAvancar.disabled = false;
}

function limparTabuleiro() {
    clearInterval(intervalo);
    intervalo = null;
    tabuleiro = criarTabuleiro(linhas, colunas);
    renderizarTabuleiro();
    btnIniciar.innerHTML = '<i class="fa-solid fa-play"></i> Iniciar';
    btnAvancar.disabled = false;
    inputLinhas.disabled = false;
    inputColunas.disabled = false;
}

renderizarTabuleiro();