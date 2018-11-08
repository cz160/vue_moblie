<template>
    <div>
        <div class="foot">
            <router-link tag="a" v-for="(item,i) in foot" 
            :key="item.id"
            :to="item.path"
            :class="{active:i==current}"
            >{{item.title}}</router-link>
        </div>
    </div>
   
</template>
<script>
export default {
    data(){
      return{
          foot:[
              {id:0,path:'/home',title:'首页'},
              {id:1,path:'/job',title:'职位'},
              {id:2,path:'/xbs',title:'小白说'},
              {id:3,path:'/center',title:'我的'},
          ],
          current:0
      }
    },
    method:{
        change(val){
            this.current=val;
            console.log(this.current)
        }
    }
};
</script>
<style lang="scss">
.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 1.306667rem;
  background-color: #fff;
  box-shadow: 0 0 0.426667rem 0 rgba(103, 103, 103, 0.13);
  display: flex;
  a {
    width: 25%;
    height: 1.306667rem;
    font-size: 0.266667rem;
    color: #a1a1a1;
    font-weight: 300;
    text-align: center;
    line-height: 1.306667rem;
  }
  .active {
    color: skyblue;
  }
}
</style>


