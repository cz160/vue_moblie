<template>
    <div>
         <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in billboards" :key="item.id">
                <img width="100%" :src="item.image">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        },
      },
      props:[billboards]
    }
  },
  computed: {
    //实例化swiper
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="scss">
</style>


