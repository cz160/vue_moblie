import _ from 'lodash'
const api = {
    //添加职位信息到职位数据库
   addPositions({id,city,company_name,log_url,maxsalary,minsalary,name,pub_time}){
       return new Promise((resolve)=>{
            setTimeout(async()=>{
                //获得数据中保存的所有职位信息
                let { position_info } = await this.getPosition()
                //判断有没有当前需要收藏的这个职位信息
                let current_info = _.find(position_info,item=>item.id==id)
                if(!current_info){
                    position_info.push({
                        id,city,company_name,log_url,maxsalary,minsalary,name,pub_time
                    })
                }
                this.changePositions(position_info)
                resolve({status:200,position_info})
            },200)
       })
   },
   //从数据库中删除职位信息
   removePositions({id}){
        return new Promise(resolve=>{
            setTimeout(async()=>{
               //获得数据中保存的所有职位信息
               let { position_info } = await this.getPosition()
               position_info = position_info.filter(item=>item.id!==id)
               this.changePositions(position_info)
               resolve({status:200,position_info})
            })
        })
   },
   //获得数据中保存的所有职位信息
   getPosition(){
       return new Promise(resolve=>{
           setTimeout(()=>{
               resolve({
                   status:200,
                   position_info:localStorage.position_info?JSON.parse(localStorage.position_info):[]
               })
           },200)
       })
   },
   //修改数据库中的职位信息
   changePositions(position_info){
        localStorage.position_info = JSON.stringify(position_info)
   }

}
export default api