
import api from '@util/api'
import {UPDATE_POSITION} from './mutation-types'
const actions = {
    //添加职位信息
    async addPositions (context,payload){
        let result = await api.addPositions(payload)
        if(result.status===200){
            //提交mutations
            context.commit({
                type:UPDATE_POSITION,
                position_info:result.position_info
            })
        }
    },
    //删除职位信息
    async removePositions(context,payload){
        let result = api.removePositions(payload)
        if(result.status===200){
            context.commit({
                type:UPDATE_POSITION,
                position_info:result.position_info
            })
        }
    },
    //初始化数据
    async init_Position(context){
        let result = await api.getPosition()
        if(result.status===200){
            //提交mutation(保证刷新时数据依然存在)
            context.commit({
                type:UPDATE_POSITION,
                position_info:result.position_info
            })
        }
    }
}
export default actions