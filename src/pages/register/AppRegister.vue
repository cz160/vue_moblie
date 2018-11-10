<template>
    <div class="reg-box">
        <div class="title">
            <img src="https://xbimg.xiaobaishixi.com/static/nmain/img/logo.png?v=a8619bf9f29571b70eaa6914d16d0ac6">
        </div>
        <form class="input-wrap register-wrap phone-register-wrap">
            <div class="input-row">
                <input type="text" placeholder="请输入手机号"  v-model = "phone">
            </div>
             <div class="input-row">
                <input type="password" placeholder="密码长度6-16位" v-model = "password">
            </div>
            <div class="input-row yzm-row">
                <input type="text" placeholder="请输入验证码" v-model="code">
                <span class="phone-code" :class="{bg :phone.length==11}" @click="isCodeShow==false?sendCode():''">{{isResend ? '重发('+resendTime+'s)' : '获取验证码'}}</span>
            </div>
            <div class="register-btn" @click="res">同意并注册</div>
            <p class="p1">注册代表您已经同意《小白实习服务条款》</p>
            <div class="p2">
                <span>已有账号，</span>
                <router-link :to="{name:'login'}" tag='a'>去登录</router-link>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            resendTime:60,
            code:'',
            isResend: false,   
            isCodeShow:false,   //防止用户多次点击
            phone:'',
            password:''
        }
    },
    methods:{
        async sendCode(){
            if(!this.isResend){  //发送验证码
                var res = await this.$http({
                    url: '/mz/v4/api/code',
                    method: 'POST',
                    data: {
                        mobile: this.phone,
                        type: "2"
                    }
                })
            }
            if(res == 'ok'){  //验证码发送从成功
                this.authCode()
            }
        },
        authCode(){   //验证码处理
            this.isCodeShow=true
            this.isResend=true;
            this.timer=setInterval(()=>{
                this.resendTime--
                if(this.resendTime==0){
                    clearInterval(this.timer)
                    this.resendTime=60
                    this.isResend=false
                    this.isCodeShow=false;
                }
            },1000)
        },
        async res(){
            let res = await this.$http({
                url: '/mz/v4/api/login',
                method: 'POST',
                data: {
                    loginType: 1,
                    password: this.code,
                    username: this.phone
                }
            },true)
            if(res.data.status ===0 ){  //验证码发送成功
                //存储
                var obj = {user:this.phone,password:this.password}
                localStorage.setItem('info',JSON.stringify(obj))
                this.$router.replace({name: 'login'})
            }
        }
    },
}
</script>

<style lang="scss">
    input{
        padding: .08rem .133333rem;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-size: .266667rem;
        color: #333;
    }
    body{
        width: 100%;
        min-height: 100%;
        background-color: #f2f2f2;
    }
    .reg-box{
        padding: .8rem .8rem 0;
        .title{
            img{
                display: block;
                margin: 0 auto;
                width: 40%;
            }
        }
        .input-wrap{
            margin-top: .933333rem;
            .input-row{
                position: relative;
                margin-bottom: .666667rem;
                input{
                    width: 100%;
                    position: relative;
                    line-height: .56rem;
                    padding: .373333rem 3%;
                    border: 1px solid #d2d2d2;
                    font-size: .426667rem;
                }
            }
            .yzm-row{
               input{
                   width: 5.066667rem;
               }
               .phone-code{
                    background-color: rgb(187, 190, 189);
                    color: rgb(255, 255, 255);
                    border-radius: .066667rem;
                    padding: .373333rem 0;
                    line-height: .56rem;
                    width: 3.333333rem;
                    text-align: center;
                    position: absolute;
                    right: 0;
                    bottom: 0;
               }
               .bg{
                    background-color: #ffd000;
                }
            }
            .register-btn{
                height: 1.2rem;
                line-height: 1.2rem;
                font-size: .426667rem;
                text-align: center;
                color: #333;
                border-radius: .133333rem;
                width: 40%;
                margin: 1.066667rem auto 0;
                background-color: #ffd000;
            }
            .p1{
                color: #dbdbdb;
                font-size: .293333rem;
                text-align: center;
                padding: .266667rem 0;
            }
            .p2{
                text-align: center;
                color: #333333;
                padding: .533333rem 0 .8rem 0;
                font-size: .373333rem;
                a{
                    color: #ffd000;
                }
            }
        }
    }
</style>

