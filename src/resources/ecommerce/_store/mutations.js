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
  // criarTarefa: (state, { tarefa }) => {
  //   return state.tarefas.push(tarefa)
  // },
  // editarTarefa: (state, { tarefa }) => {
  //   const indice = state.tarefas.findIndex(t => t.id === tarefa.id)
  //   state.tarefas.splice(indice, 1, tarefa)
  // },
  // setarErro: (state, { erro }) => {
  //   state.erro = erro
  // },
  // exibirFormulario: (state, exibir) => {
  //   console.log("Eibir? ",exibir)
  //   state.exibirForm = exibir}

}