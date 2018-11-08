<template>
    <div class="login-content">
        <div class="login-box">
            <div class="logo">
                <img src="https://xbimg.xiaobaishixi.com/static/wap/img/wap-logo1.png?v=eed85e3ac0d9b30e04401a6a34bfdf1c">
            </div>
            <div class="input-wrap">
                <div class="m-top">
                    <input type="text" placeholder="手机号/邮箱" v-model="username">
                </div>
                <div class="m-pwd">
                    <input type="password" placeholder="密码" v-model="password">
                </div>
                <div class="login-btn" @click="login">立即登录</div>
                <div class="bottom">
                    <span class="forget-pwd">忘记密码</span>
                    <router-link :to="{name:'register'}" class="register" tag="span">点我注册</router-link>
                </div>
            </div>
            <div class="login_ico">
                <p>其他方式登录</p>
                <div class="other">
                    <a>
                        <img src="https://xbimg.xiaobaishixi.com/static/wap/img/wx_ico.png?v=6376e6cee2cea9e11639b74111567e0b">
                    </a>
                    <a>
                        <img src="https://xbimg.xiaobaishixi.com/static/wap/img/qq_ico.png?v=42d6bd7d07b6b1a80a1adbd6648c1ee3">
                    </a>
                    <a>
                        <img src="https://xbimg.xiaobaishixi.com/static/wap/img/weibo_ico.png?v=c07653598b8a701947f8856ea8c3c830">
                    </a>
                    <a>
                        <img src="https://xbimg.xiaobaishixi.com/static/wap/img/renren_ico.png?v=173de8d63d5075a1d218418bc1976e1d">
                    </a>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            var info = JSON.parse(localStorage.getItem('info'));
            if(this.username==info.user && this.password==info.password){
                this.$router.replace({name:'center'}) //替换路由
            }else{
                alert('账号或者密码有误')
            }
        }
    } 
}
</script>
<style lang="scss">
    .login-content{
        width: 100%;
        .login-box{
            width: 100%;
            position: relative;
            overflow: hidden;
            .logo{
                width: 4.666667rem;
                padding-top: 1.6rem;
                margin: 0 auto;
                img{
                    width: 4.666667rem;
                }
            }
            .input-wrap{
                padding: 0 .8rem;
                .m-top{
                    position: relative;
                    margin-top: 1.333333rem;
                    margin-bottom: .666667rem;
                    input{
                        position: relative;
                        width: 100%;
                        line-height: .56rem;
                        padding: .373333rem 3%;
                        border: .013333rem solid #d2d2d2;
                        border-radius: .04rem;
                        font-size: .426667rem;
                        color: #666666;
                        text-align: left;
                        background-color: white;
                        outline: none;
                        box-sizing: border-box;
                    }
                }
                .m-pwd{
                   position: relative;
                   input{
                        position: relative;
                        width: 100%;
                        line-height: .56rem;
                        padding: .373333rem 3%;
                        border: .013333rem solid #d2d2d2;
                        border-radius: .04rem;
                        font-size: .426667rem;
                        color: #666666;
                        text-align: left;
                        background-color: white;
                        outline: none;
                        box-sizing: border-box; 
                   } 
                }
                .login-btn{
                    position: relative;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    font-size: .426667rem;
                    text-align: center;
                    border-radius: .133333rem;
                    color: #333333;
                    width: 40%;
                    margin: 1.333333rem auto 0;
                    border: none;
                    box-sizing: border-box;
                    background-color: #ffd000;
                }
                .bottom{
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    .forget-pwd,.register{
                        margin-top: 60px;
                        color: #676765;
                        font-size: 28px;
                    }
                }

            }
            .login_ico{
                text-align: center;
                margin: 1.866667rem 0 1.866667rem;
                p{
                    padding-bottom: .586667rem;
                    color: #c3c3c3;
                    font-size: .426667rem;
                }
                .other{
                    display: flex;
                    justify-content:center;
                    a{
                        text-decoration: none;
                        text-align: center;
                        color: inherit;
                        img{
                            margin-right: .533333rem;
                        }
                    }
                }
            }
        }
    }
</style>

