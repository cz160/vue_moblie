<template>
  <section class="job-o">
    <!--头部粗略筛选-->
    <app-job-header></app-job-header>
    <!--主体内容-->
    <main>
      <app-job-list></app-job-list>
    </main>
  </section>
</template>
<script>
  import AppJobHeader from '@c/base/AppJobHeader'
  import AppJobList from '@c/layout/home/AppHomeList'

  export default {
    //注册组件
    components: {
      AppJobHeader,
      AppJobList
    },
    data() {
      return {

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
  }

  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .job-o{
    box-shadow: 0 0 2px 2px #23c3ff;
  }



</style>


