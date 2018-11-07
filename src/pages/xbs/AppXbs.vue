<template>
    <div>
        <app-banner :billboards="billboards"></app-banner>
    </div>
</template>
<script>
import AppBanner from '@c/base/AppBanner'
export default {
    components:{
        AppBanner
    },
    data(){
        return {
            "billboards": [
                {
                id: 1,
                image:"https://xbimg.xiaobaishixi.com/3F/9B/3FA3996788CBB627B2914D05D705D19B.png"
                },
                {
                id: 2,
                image:"https://xbimg.xiaobaishixi.com/A6/BF/A6F06C4B50E434A64F4F948E6608A8BF.jpg"
                },
                {
                id: 3,
                image:"https://xbimg.xiaobaishixi.com/B8/4F/B8DCDAE82A5156706C8D071727288C4F.png"
                },
                {
                id: 4,
                image:
                    "https://xbimg.xiaobaishixi.com/0F/7F/0F6EB131D886A526B7D5189E43950E7F.png"
                },
                {
                id: 5,
                image:"https://xbimg.xiaobaishixi.com/63/8F/6303AA183545C4BB3E0F253933D84B8F.jpg"
                },
                {
                id: 6,
                image:"https://xbimg.xiaobaishixi.com/17/50/17A6A5392BDAA552D3695F1655DA4450.jpg"
                }
            ]
        }
    } 
}
</script>
<style lang="scss">

</style>

