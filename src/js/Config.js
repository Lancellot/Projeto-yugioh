// Seleciona os elementos necessários
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const listaPersonagens = document.querySelectorAll('.cartao');

let indexAtual = 0; // Índice da carta atualmente visível

// Função para atualizar a visibilidade das cartas
function atualizarCartao(indice) {
    // Remove a classe 'selecionado' de todos os cartões
    listaPersonagens.forEach(cartao => cartao.classList.remove('selecionado'));
    
    // Adiciona a classe 'selecionado' ao cartão correto
    listaPersonagens[indice].classList.add('selecionado');
}

// Evento de avançar
btnAvancar.addEventListener('click', () => {
    if (indexAtual < listaPersonagens.length - 1) {
        indexAtual++;
        atualizarCartao(indexAtual);
    }
});

// Evento de voltar
btnVoltar.addEventListener('click', () => {
    if (indexAtual > 0) {
        indexAtual--;
        atualizarCartao(indexAtual);
    }
});
