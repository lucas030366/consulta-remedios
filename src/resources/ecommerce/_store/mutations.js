export default {
  listarProdutos: (state, { produtos }) => { /*payload.produtos*/
    return state.produtos = produtos
  },
  selecionarProduto: (state, { produto }) => {
    state.cart.push(produto)
  },
  deletarProduto: (state, { pdt }) => {
    const indice = state.cart.findIndex(t => t.id === pdt.id)
    state.cart.splice(indice, 1)
  },
  filtrarProduto: (state, type) => {
    let newArrayFilter = state.produtos.slice()

    switch (type) {
      case 1:
        newArrayFilter.sort((a, b) => {
          return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;
        })
        break;
      case 2:
        newArrayFilter.sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
        break;
      case 3:
        newArrayFilter.sort((a, b) => {
          return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
        })
        break;
      case 4:
        newArrayFilter.sort((a, b) => {
          return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
        })
        break;
      case 5:
        newArrayFilter.sort((a, b) => {
          return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
        })
        break;

      default:
        break;
    }

    return state.produtosFilter = newArrayFilter
  }

}