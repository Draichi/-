export default {
  addColumn (state) {
    state.columnsCounter += 1
    state.columnsList.push(state.columnsCounter)
  },
  addItemIdCounter (state) {
    state.itemIdCounter += 1
  },
  delColumn (state, payload) {
    var index = state.columnsList.indexOf(payload)
    state.columnsList.splice(index, 1)
  }
}