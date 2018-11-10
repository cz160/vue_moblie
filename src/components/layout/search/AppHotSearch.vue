<template>
        <div class="hot-search">
            <div class="hot-search-box">
              <p>热门搜索</p>
              <ul class="hot-keywords">
                <li v-for="(keywords, index) in hotKeywords">{{keywords}}</li>
              </ul>
            </div>
            <p class="aboutOur"><span>关于我们</span> &nbsp;|&nbsp; <span>联系我们</span></p>
        </div>
</template>
<script>
export default {
    
    data(){
       return {
            hotKeywords: [ '软件', '广告', '招聘', '市场', '银行', '行政', '财会', '前端' ]
       } 
    }
};
</script>
<style lang="scss">
    .hot-search{
        position: relative;
        top: 2.506667rem;
        width: 100%;
        .hot-search-box{
          width: 9.6rem;
          height: 2.6rem;
          padding: .4rem 0 0 .4rem;
          p{
            height: .493333rem;
            color: #333;
          }
          .hot-keywords{
            width: 9.6rem;
            height: 2.106667rem;
            li{
              width: 1.413333rem;
              height: .586667rem;
              border: .026667rem solid #ccc;
              color: #ccc;
              margin: .4rem .4rem 0 0;
              float: left;
              border-radius: .32rem;
              line-height: .586667rem;
              text-align: center;
            }
          }
        }
        p.aboutOur{
            height: 1.333333rem;
            line-height: 1.333333rem;
            text-align: center;
            font-size: .32rem;
            color: #999;
        }
    }
</style>


