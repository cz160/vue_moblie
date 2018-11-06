<template>
     <li>
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
    </li>
</template>
<script>
export default {
    props:['job'],
};
</script>
<style lang="scss">
</style>


