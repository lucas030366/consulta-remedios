import ecommerceServices from "../_services/ecommerceServices"

export default {
  listarProdutos: ({ commit }) => {
    return ecommerceServices.getProducts()
      .then(response => {
        commit("listarProdutos", { produtos: response.data })
      })
      .catch(erro => commit("setarErro", { erro }))
  },
  selecionarProduto: ({ commit }, payload) => {
    commit("selecionarProduto", payload)
  },
  deletarProduto: ({ commit }, payload) => {
    commit("deletarProduto", payload)
  },
  filtrarProduto: ({ commit }, payload) => {
    commit("filtrarProduto", payload)
  },
  // editarTarefa: ({ commit }, { tarefa }) => {
  //   return ecommerceServices.putTarefa(tarefa)
  //     .then(response => {
  //       commit("editarTarefa", { tarefa: response.data })
  //     })
  // },

  // concluirTarefa: ({ dispatch }, payload) => {
  //   const tarefa = Object.assign({}, payload.tarefa)
  //   tarefa.concluido = !tarefa.concluido
  //   dispatch("editarTarefa", { tarefa })
  // },

  // resetarTarefaSelecionada: ({ commit }) => {
  //   return commit("selecionarTarefa", { tarefa: null })
  // },
  // exibirFormulario: ({ commit }, exibir) => {
  //   commit("exibirFormulario", exibir)
  // }

}