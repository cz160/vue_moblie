
import {UPDATE_POSITION} from './mutation-types'

const mutations = {
    [UPDATE_POSITION]:(state,payload)=>{
        state.position_info = _.clone(payload.position_info)
    }
}
export default mutations