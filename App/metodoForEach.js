const inserirLivro = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosNaTela(listaDeLivros){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
    inserirLivro.innerHTML = '';
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro__imagens indisponivel';
        inserirLivro.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}"
            alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>` 
    });
}