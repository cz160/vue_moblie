<template>
  <section class="search-o">
    <!--顶部搜索-->
    <app-search-top :show.sync="searchWords"></app-search-top>
    <!--头部粗略筛选-->
    <app-job-header :show.sync="searchWords"></app-job-header>
    <!--主体内容-->
    <main class="jobList">
      <app-hot-search v-if="showBlock === 1"></app-hot-search>
      <app-job-list v-if="showBlock === 2" :searchWords="searchWords" :show.sync="showBlock"></app-job-list>
      <app-job-not-found v-if="showBlock === 3"></app-job-not-found>
    </main>
  </section>
</template>
<script>
  import AppSearchTop from '@c/layout/search/AppSearchTop'
  import AppJobHeader from '@c/base/AppJobHeader'
  import AppJobList from '@c/layout/job/AppJobList'
  import AppHotSearch from '@c/layout/search/AppHotSearch'
  import AppJobNotFound from '@c/layout/search/AppJobNotFound'
  import fontAweSome from '../../../public/font-awesome/css/font-awesome.css'

  export default {
    //注册组件
    components: {
      AppSearchTop,
      AppJobHeader,
      AppJobList,
      AppHotSearch,
      AppJobNotFound
    },
    data() {
      return {
        showBlock: 1,
        searchWords: 'null'
      }
    },
    watch: {
      searchWords: function(){
        this.showBlock = 2
      }
    }
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0
  }

  html, body {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .search-o .header{
    top: 1.173333rem;
  }
  .search-o .job-content-parent{
    top: 2.506667rem;
  }
  
  
  



</style>


