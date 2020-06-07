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