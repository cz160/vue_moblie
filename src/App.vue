<template>
  <div id="app">
    <main>
       <app-home></app-home>
    </main>
    <footer>
         
    </footer>
  </div>
</template>
<script>

//引入home页根组件
import AppHome from '@pages/home/AppHome'
export default {
    name:'app',
    components:{
      AppHome
    }
}
</script>

<style lang="scss">

</style>
