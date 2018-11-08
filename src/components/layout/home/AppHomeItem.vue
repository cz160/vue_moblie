<template>
    <router-link tag="li" :to="{name:'detail',params:{id:job.id},query:{
        log_url:job.log_url,
        name:job.name,
        company_name:job.company_name,
        city:job.city,
        pub_time:job.pub_time}}">
        <a>
            <div class="left">
                <img :src="job.logo_url">
                <div class="middle">
                    <p>{{job.name}}</p>
                    <p>{{job.company_name}}</p>
                    <p >{{job.city}}</p>
                </div>
            </div>
            <div class="right">
                <p class="time">11-05-09:11</p>
                <p class="price">￥180-181/天</p>
            </div>
        </a>
    </router-link>
</template>
<script>
export default {
    props:['job'],

    //我写的
    // methods:{
    //     gotodetail(){
    //         this.$router.push({name:'detail',params: { id: this.job.id }})
    //     }
    // }
    //到这
};
</script>
<style lang="scss">
</style>


