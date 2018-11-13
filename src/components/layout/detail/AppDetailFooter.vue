

<template>
    <div class="s-footer">
        <div class="footer-last">
            <div class="collect" @click="getmessage">
                    <img src="http://xbimg.xiaobaishixi.com/static/wap/img/star.png" alt="">             
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
export default {
    data(){
        return {
            isshow:true
        }
    },
    methods:{
        ...mapActions({
            addPositions:'collect/addPositions'
        }),
        //点击收藏
        getmessage(){
            this.isshow=false
            let id = this.$route.params.id;
            let {city,company_name,log_url,maxsalary,minsalary,name,pub_time} = this.$route.query
            this.addPositions({
                id,city,company_name,log_url,maxsalary,minsalary,name,pub_time
            })
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

</style>
