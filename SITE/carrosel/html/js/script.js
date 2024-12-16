let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome: nome, preco: preco });
    alert(nome + " foi adicionado ao carrinho. Total de itens: " + carrinho.length);
} 
// Função para filtrar os produtos com base na categoria
function filtrarCategoria(categoria) {
    // Obtém todos os produtos
    const produtos = document.querySelectorAll('.produto');

    // Se a categoria for vazia (Todos), exibe todos os produtos
    if (categoria === '') {
        produtos.forEach(produto => {
            produto.style.display = 'block';
        });
    } else {
        produtos.forEach(produto => {
            // Se o produto tem a classe da categoria selecionada, mostra ele
            if (produto.classList.contains(categoria)) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        });
    }
}
    