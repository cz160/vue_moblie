

<template>
    <div class="s-footer">
        <div class="footer-last">
            <div class="collect" @click="getmessage">
                    <img v-if="isshow" src="http://xbimg.xiaobaishixi.com/static/wap/img/star.png" alt=""> 
                    <img v-else  src="https://xbimg.xiaobaishixi.com/static/wap/img/stared.png?v=9da0ea5c02cc85d99cfb80ca043d1e95" alt="">                       
                <a>
                    <p v-if="isshow">收藏</p>
                    <p v-else>已收藏</p>
                </a>           
            </div>
            <div class="empy">

            </div>
            <div class="text">
                <img src="https://xbimg.xiaobaishixi.com/static/wap/img/edit-resume.png" alt="">
                <a><p>编辑简历</p></a>
            </div>
            <div class="empy">

            </div>
            <div class="now">
               <a><p>马上投递</p></a>
            </div>
        </div>
    </div>

</template>

<script>
import {mapActions} from 'vuex'
import api from '@util/api'
import _ from 'lodash'
export default {
    data(){
        return {
            isshow:true
        }
    },
    methods:{
        ...mapActions({
            addPositions:'collect/addPositions',
            removePositons:'collect/removePositions'
        }),
        //点击收藏
        getmessage(){
            this.isshow=!this.isshow
            let id = this.$route.params.id;
            let {city,company_name,log_url,maxsalary,minsalary,name,pub_time} = this.$route.query
            if(!this.isshow){
                 this.addPositions({
                    id,city,company_name,log_url,maxsalary,minsalary,name,pub_time
                })
            }else{
                this.removePositons({
                    id
                })
            }
           
        }

    },
    async created(){
        //初始化收藏状态
        let result = await api.getPosition()
        let position_info = result.position_info
        let isHave = _.find(position_info,item=>item.id==this.$route.params.id)
        //如果数据库中已经收藏了本职位信息，将其状态默认更改为已经收藏
        if(isHave){
            this.isshow=false
        }
    }
}
</script>

<style lang="scss">

    .footer-last{
        height: .96rem;
        padding: .173333rem .4rem;
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: row;
        background: #fff;
        .collect,.text{
            text-align: center;
            width: 2.186253rem;
            height: .826667rem;
            vertical-align: middle;
            color: #a1a1a1;
            background: #f6f6f6;
            font-size: .266667rem;
            
        }
        .empy{
            width:4px;
            background: #fff;
        }
        .now{
            width: 4.506667rem;
            text-align: center;
            line-height: .96rem;
            background: #ffd000;
            color: #333;
            font-size: .373333rem;
        }
        
    }
    // .active{
    //     background: #ffd000
    // }

</style>
