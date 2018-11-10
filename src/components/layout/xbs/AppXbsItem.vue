<template>
     <div class="item">
        <img v-lazy="list.cover_img">
        <div class="left">
            <h1 class="til">{{list.title}}</h1>
            <p>{{list.description}}</p>
            <div class="icons">
                <span class="time">{{list.build_time}}</span>
                <span class="view">{{list.click_num}}</span>
                <span class="like">{{list.praise_num}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['list']
};
</script>
<style lang="scss">
</style>


