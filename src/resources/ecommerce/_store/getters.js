export default {
  produtosRecentes: (state) => {
    return state.produtos
  },
  produtosPorNome: (state) => {
    const porNome = state.produtos
    porNome.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
    return porNome
  },
  tarefasConcluidas: (state, rootState) => {
    return state.tarefas.filter(t => t.concluido)
  },
  tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
  totalConcluido: (state, getters) => getters.tarefasConcluidas.length,
  buscarTarefaId: state => (id) => state.tarefas.find(t => t.id === id),
}