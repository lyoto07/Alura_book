let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getLivrosAPI();

async function getLivrosAPI(){
    const resposta = await fetch(endPointAPI);
    livros = await resposta.json();
    console.table(livros)
    const livroComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livroComDesconto);
}
