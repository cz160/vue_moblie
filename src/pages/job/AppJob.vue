<template>
  <section class="job-o">
    <!--头部粗略筛选-->
    <app-job-header></app-job-header>
    <!--主体内容-->
    <main class="jobList">
      <app-job-list></app-job-list>
    </main>
    <app-foot></app-foot>
  </section>
</template>
<script>
  import AppJobHeader from '@c/base/AppJobHeader'
  import AppJobList from '@c/layout/job/AppJobList'
  import fontAweSome from '../../../public/font-awesome/css/font-awesome.css'

  import AppFoot from '@c/base/AppFoot'
  export default {
    //注册组件
    components: {
      AppJobHeader,
      AppJobList,
      AppFoot
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


</style>


