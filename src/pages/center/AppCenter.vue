
<template>
    <div class="center">
        <div class="s-header">
            <div class="s-left">
                <img src="https://xbimg.xiaobaishixi.com/static/img/default/default_headpic.png" alt="">
            </div>
            <div class="s-right">
                <a>
                    <img src="http://wap.xiaobaishixi.com/static/img/rar/test_wait.png" alt="">
                </a>
                <span>心成长的高度，就是将来的成就</span>
            </div>
        </div>
        <div class="s-list">
            <ul class="s-title s-public">
                <li class="s-massage"
                v-for='item in message'
                :key="item.id"
                >
                    <a>{{item.title}}</a>
                </li>
                
            </ul>
            <ul class=" s-public">
                <li class="s-massage">
                    <a>退出登录</a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            message:[
                {id:1,title:'我的投递'},
                {id:2,title:'我的收藏'},
                {id:3,title:'我的简历'},
                {id:4,title:'我要测评'}
            ]
        }
    }
}
</script>

<style lang="scss">
.center{
    .s-header{
        height: 1.866667rem;
        background: #fff;
        padding: .453333rem .4rem;
        .s-left{
            float: left;
            width: 1.866667rem;
            height: 1.866667rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .s-right{
            float: right;
            width: 7.333333rem;
            height: 100%;
            
            a{
                width: .4rem;
                height: .626667rem;
                display: block;
                margin-top: .266667rem;
                img{
                    width: .4rem;
                    height: .44rem;
                }
            }
            span{
                display: block;
                margin-top: .24rem;
                font-size: .346667rem;
                color: #95a0a8;
            }
            
        }
        
    }
    .s-list{
        .s-title{
            height: 4.96rem;
        }
        .s-public{
            width: 100%;
            
            margin-top: .4rem;
            background: #fff;
            .s-massage{
                width: 7.866667rem;
                height: .56rem;
                padding: .333333rem .4rem;
                margin: 0 .666667rem;
                font-size: .426667rem;
                color: #333;
                border-bottom: solid 1px #eaeaea;
            }
            
        } 
    }
}
</style>

