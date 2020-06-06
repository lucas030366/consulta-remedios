import ecommerceServices from "../_services/ecommerceServices"

export default {
  //  listarTarefas = async ({ commit }) => {
  //   const response = await ecommerceServices.getTarefas()
  //   commit("listarTarefas", { tarefas: response.data })
  //  },
  // criarTarefa: ({ commit }, { tarefa }) => {
  //   return ecommerceServices.postTarefa(tarefa)
  //     .then(response => {
  //       commit("criarTarefa", { tarefa: response.data })
  //     })
  //     .catch(erro => commit("setarErro", { erro }))
  // },
  listarProdutos: ({ commit }) => {
    return ecommerceServices.getProducts()
      .then(response => {
        commit("listarProdutos", { produtos: response.data })
      })
      .catch(erro => commit("setarErro", { erro }))
  },
  // editarTarefa: ({ commit }, { tarefa }) => {
  //   return ecommerceServices.putTarefa(tarefa)
  //     .then(response => {
  //       commit("editarTarefa", { tarefa: response.data })
  //     })
  // },
  // deletarTarefa: ({ commit }, { tarefa }) => {
  //   return ecommerceServices.deleteTarefa(tarefa.id)
  //     .then(response => {
  //       commit("deletarTarefa", { tarefa })
  //     })
  // },
  // concluirTarefa: ({ dispatch }, payload) => {
  //   const tarefa = Object.assign({}, payload.tarefa)
  //   tarefa.concluido = !tarefa.concluido
  //   dispatch("editarTarefa", { tarefa })
  // },
  selecionarTarefa: ({ commit }, payload) => {
    commit("selecionarTarefa", payload)
  },
  // resetarTarefaSelecionada: ({ commit }) => {
  //   return commit("selecionarTarefa", { tarefa: null })
  // },
  // exibirFormulario: ({ commit }, exibir) => {
  //   commit("exibirFormulario", exibir)
  // }

}