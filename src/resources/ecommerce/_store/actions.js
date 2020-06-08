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
  filtrarProduto: ({ commit }, type) => {
    commit("filtrarProduto", type)
  }

}