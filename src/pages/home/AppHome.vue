<template>
    <!--头部轮播图-->
    <section class="wrap">
        <app-banner></app-banner>
    </section>
</template>
<script>
import AppBanner from '@c/base/AppBanner'
export default {
    //注册组件
    components:{
        AppBanner
    }
}
</script>
<style lang="scss">
    *{
        margin:0;
        padding:0
    }
</style>


