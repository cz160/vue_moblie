
import actions from './actions'
import mutations from './mutations'
import state from './state'
const collect = {
    namespaced:true,
    state,
    actions,
    mutations
}
export default collect