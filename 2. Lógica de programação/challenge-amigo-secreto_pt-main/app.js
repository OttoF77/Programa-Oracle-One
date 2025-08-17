//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Cria um array para armazenar os nomes dos amigos
let amigos = [];

//Cria uma função que adiciona um nome ao array amigos. Esta função deve capturar o valor de um campo de entrada HTML, validar se o nome não está vazio e, se válido, adicionar o nome ao array.
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Valida a entrada
    if (nome.length === 0) {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = '';
    
    // Atualiza a exibição da lista
    exibirAmigos();
}

//Cria uma função que exibe os nomes dos amigos em uma lista HTML. Esta função deve percorrer o array amigos e criar um elemento <li> para cada nome, adicionando-os a um elemento <ul> ou <ol> no HTML.
function exibirAmigos() {
    // Obtém o elemento da lista
    const lista = document.getElementById('listaAmigos');

    // Limpa a lista existente
    lista.innerHTML = '';

    // Percorre o array de amigos e adiciona cada nome como um elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Cria uma função que sorteia um amigo aleatoriamente do array amigos. Esta função deve verificar se há amigos disponíveis, gerar um índice aleatório e exibir o nome sorteado em um elemento HTML.
function sortearAmigo() {
    // Verifica se há amigos disponíveis
    if (amigos.length === 0) {
        alert('Nenhum amigo adicionado para sortear.');
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}

//Adiciona eventos aos botões para chamar as funções correspondentes  
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.button-add').addEventListener('click', function() {
        adicionarAmigo();
    });
    
    document.querySelector('.button-draw').addEventListener('click', function() {
        sortearAmigo();
    });
});

