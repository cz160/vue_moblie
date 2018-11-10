

<template>
<section class="s-detail">
  <div class="detail">
    <!-- 头部图片 -->
    <div class="s-header">
      <div class="logo">
        <img :src="log_url" alt="">
      </div>           
    </div>
    <!-- 职位介绍 -->
    <div class="job-detail">
        <div class="job-title">
            <div class="job-post">
                <span class="post">{{name}}</span>
            </div>
            <div class="job-time">
                <span>{{pub_time}}</span>
            </div>               
      </div>
            <div class="job-good">
                <a>发展前景好，学习机会多，办公环境好</a>
            </div>
            <div class="job-require">
                <span>{{city}}</span>
                <span>本科</span>
                <span>4天/周</span>
                <span>面议</span>
                <span>实习三个月</span>
            </div>
            <div class="job-company">
                <a class="company-name">
                    <p>{{company_name}}</p>
                    <p>None</p>
                </a>
            </div>
        </div> 

        <!-- 底部 -->
        <div class="information">
          <div class="info-title">
            <div class="title-left">
              <h2>
                职位描述
              </h2>
            </div>
            <div class="tag-line">

            </div>
          </div>
          <div class="descripe s-public">
            <p>岗位职责</p>
            <p>1. 负责数据仓库、数据集市相关数据的接入和数据分发工作，以及数据质量校验；</p>
            <p>2.数据集市相关数据的接入和数据分发工作，以及数据质量校验；</p>
            <p>3.数据集市相关数据的接入和数据分发工作，以及数据质量校验；</p>
            <p>4.数据集市相关数据的接入和数据分发工作</p>
          </div>
          <div class="require s-public">
            <p>岗位要求</p>
            <p>1. 负责数据仓库、数据集市相关数据的接入和数据分发工作，以及数据质量校验；</p>
            <p>2.数据集市相关数据的接入和数据分发工作，以及数据质量校验；</p>
            <p>3.数据集市相关数据的接入和数据分发工作，以及数据质量校验；</p>
            <p>4.数据集市相关数据的接入和数据分发工作</p>
          </div>
          <div class="well s-public">
            <p>薪酬福利</p>
            <p>以及数据质量校验；</p>            
          </div>
          <div class="well s-public">
            <p>简历格式：姓名+学校+专业+应聘岗位</p>            
          </div>         
        </div>
        <div class="adress">
          <div class="info-title">
            <div class="title-left">
              <h2>
                工作地点
              </h2>
            </div>
            <div class="tag-line"></div>
          </div>
          <div class="adress-info">
            <p class="adress-pic well">              
              <span>北京市海淀区中关村软件园</span>
            </p>            
          </div> 
        </div>
        <div class="awarn">
          <div class="info-title">
            <div class="title-left">
              <h3>
                小白实习提醒你:
              </h3>
            </div>
            <div class="tag-line"></div>
          </div>
          <div class="awarn-info well">
            <p class="fonts">              
                在招聘、录用期间要求你支付费用的行为都必须提高警惕。以招聘为名的培训、招生，许诺推荐其他工作机会，甚至提供培训贷款，或者
                支付体检、服装、押金和培训等费用后才能录用工作的，都属于违法行为，应当提高警惕。一经发现，请立即举报，并向当地公安机关报案。
            </p>            
          </div> 
        </div> 
  </div>
  <!-- //<app-detail-foot></app-detail-foot> -->
  <app-detail-footer></app-detail-footer>
</section>
</template>

<script>
import AppDetailFooter from "@c/layout/detail/AppDetailFooter";
export default {
  components:{
    AppDetailFooter
  },
  props:['id'],

  data(){
    return {
        log_url:"https://xbimg.xiaobaishixi.com/FC/BD/FCC32665A730906176723F989BB367BD.png",
        name:'关务客服实习生',
        company_name:"敦豪物流",
        city:"西安",
        pub_time:"29分钟前"
    }

  },
  mounted(){
      this.name=this.$route.query.name
      this.pub_time=this.$route.query.pub_time
      this.log_url=this.$route.query.log_url
      this.city=this.$route.query.city
      this.company_namel=this.$route.query.company_name
  }
    // console.log(this)
    // console.log(this.$route)
    //this.log_url=

  }
</script>

<style lang="scss">
.detail {
  //图案
  .s-header {
    background: url(https://xbimg.xiaobaishixi.com/static/wap/img/company_pic.png)
      no-repeat 50% 100%;
  }
  //头部
  .s-header {
    position: relative;

    //width: 100%;
    height: 4.48rem;
    .logo {
      width: 1.44rem;
      height: 1.44rem;
      position: absolute;
      bottom: -0.72rem;
      left: 0.493333rem;
      right: 0;
      border-radius: 2px;
      background-color: #fff;
      img {
        width: 1.44rem;
        height: 1.44rem;
      }
    }
  }
  //职位信息
  .job-detail {
    background: #fff;
    //width: 9.146667rem;
    // width: 9.146667rem;
    // height: 6.306667rem
    //height: 6.306667rem;
    padding: 1.2rem 0.426667rem 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .job-title {
      width: 9.146667rem;
      height: 0.706667rem;
      .job-post {
        max-width: 7.2rem;
        word-break: break-all;
        font-size: 0.533333rem;
        font-weight: 500;
        float: left;
        text-align: left;
      }
      .job-time {
        font-size: 0.32rem;
        color: #999;
        margin-top: 0.293333rem;
        float: right;
      }
    }
    .job-good {
      margin-top: 0.44rem;
      padding-right: 0.426667rem;
      font-size: 0.373333rem;
      color: #717171;
      text-align: left;
      a {
        text-decoration: underline;
      }
    }
    .job-require {
      margin-top: 0.44rem;
      padding-bottom: 0.08rem;
      text-align: left;
      border-bottom: dashed 1px #eaeaea;
      span {
        margin-bottom: 0.386667rem;
        display: inline-block;
        padding: 0.133333rem 0.266667rem;
        margin-right: 0.36rem;
        background-color: #fafafa;
        border: solid 1px #eaeaea;
        font-size: 0.32rem;
        color: #666;
      }
    }
    .job-company {
      .company-name {
        position: relative;
        padding: 0.466667rem 0 0.4rem;
        display: block;
        width: 100%;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 6.666667rem;
        }
        p:nth-child(1) {
          font-size: 0.4rem;
          color: #666;
        }
        p:nth-child(2) {
          text-align: left;
          color: #999;
          font-size: 0.32rem;
          word-break: break-all;
        }
      }
    }
  }
  //职位信息
  .information {
    height: 100%;
    //margin-bottom: 0.266667rem;
    .information-con {
      padding-top: 0.32rem;
      margin-top: 0.32rem;
      box-sizing: border-box;
      background-color: #fff;
      h2 {
        padding: 0 0.453333rem;
        box-sizing: border-box;
        float: left;
        width: 100%;
        font-size: 0.426667rem;
        background-color: #fff;
        div {
          //padding: .4rem 0 .4rem;
          .tag-name {
            //float: left;
            padding-right: 0.133333rem;
          }
          .cut-line {
            overflow: hidden;
            border-top: 1px solid #eaeaea;
            margin: 0.306667rem 0 0 0.066667rem;
          }
        }
        .detail-address {
          margin-bottom: 0.2rem;
          font-size: 0.373333rem;
          word-break: break-all;
          //float: left;
          color: #666;
          margin-top: 0.4rem;
          i {
            background: url(https://xbimg.xiaobaishixi.com/static/wap/img/icon-address.png)
              no-repeat;
            background-size: 0.533333rem 0.626667rem;
          }
          i {
            display: inline-block;
            width: 1.066667rem;
            height: 1.066667rem;
            /*background: url(../img/icon.png) no-repeat -136px -45px; */
            vertical-align: middle;
          }
        }
      }
      .responsibility {
        float: left;
        padding: 0.44rem 0.453333rem;
        width: 100%;
        box-sizing: border-box;
        color: #666;
        background-color: #fff;
        word-break: break-all;
        span {
          font-size: 0.533333rem;
        }
        p {
          margin: 0;
          padding: 0;

          font-weight: normal;
          span {
            font-size: 0.533333rem;
          }
        }
      }
    }
  }
  //底部
  .information,.adress,.awarn{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-top: .32rem;
    background: #fff;
    padding: .32rem  .453333rem;
    .info-title{
      position: relative;
      .title-left{
        height: 1.12rem;
        line-height: 1.12rem;
        float: left;
        h2{
          font-size: .426667rem;
          color: rgb(27, 22, 22);
        }
        
      }
      .tag-line{
       width:6.666667rem ;
        border: 1px solid #eaeaea;
        position: absolute;
        top:.533333rem;
        right: 0; 
        // width: .266667rem;
        // height: .266667rem;
        
      }            
    }
    .s-public{
      color: #666;
      font-size: .54rem;        
    }
    .require,.well{
      margin-top: .533333rem;
    }
  }
  .adress{
    .adress-info{
      font-size: .373333rem;
      color: #666;
    }
  }
  .awarn{
    height: 3.633333rem;
    margin-bottom: 1.76rem;
    .info-title{
      color: #b79442;
    }
    .awarn-info{
      font-size: .293333rem;
      color:#b79442;

    }
  }
}
</style>


