<template>
  <div>
    <div class="header">
      <div class="header-nav">
        <ul :class="{ show: isShow }">
          <li v-for="(header, index) in headerNavOnes"
              @click="addClass(index,'one')"
              :key="index"
              :class="{ selected: index ===  currentOne}"
          >{{header.text}}</li>
          <li @click="isShow = !isShow">......</li>
        </ul>
        <ul :class="{ show: !isShow }">
          <li v-for="(header, index) in headerNavTwos"
              @click="addClass(index,'two')"
              :key="index"
              :class="{ selected: index ===  currentTwo}"
          >{{header.text}}</li>
          <li @click="isShow = !isShow">......</li>
        </ul>
      </div>
      <div class="header-filter">
        <div class="filter-cover" :class="{ oneCover: isOneCover }" @click="isOneCover = !isOneCover"></div>
        <ul class="one-list" :class="{ oneCover: isOneCover }">
          <li v-for="(header, index) in headerNavThrees"
              @click="addClass(index,'three')"
              :key="index"
              :class="{ unlimited: index === 0, active: index ===  currentThree}"
          >{{header.text}}</li>
        </ul>
        <ul class="two-list" :class="{ twoCover: isTwoCover, threeCover: isThreeCover }">
          <li v-for="(header, index) in headerNavFours"
              :key="index"
              @click="addClass(index,'four')"
          >{{header.text}}</li>
        </ul>
        <ul class="three-list" :class="{ threeCover: isThreeCover }">
          <li v-for="(header, index) in headerNavFives"
              :class="{ unlimited: index === 0}"
              :key="index"
              @click="addClass(index,'five')"
          >{{header.text}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import jobList from '../../../public/data/jobList'
  export default {
    name: "app-job-header",
    data() {
      return {
        isShow : true, //两层导航栏 选择显示
        onShow: 0,    //记录导航栏中哪一个li的index
        whichNav: 0,  //记录导航栏中哪一个li的层数
        isOneCover: false,
        isTwoCover: false,
        isThreeCover: false,
        currentOne: 0,
        currentTwo: 0,
        currentThree: 0,
        currentFour: 0,
        headerNavOnes: [
          {text: '类型'},
          {text: '地点'},
          {text: '日薪'},
          {text: '学历'}
        ],
        headerNavTwos: [
          {text: '每周实习天数'},
          {text: '实习月数'}
        ],
        //各种筛选条件
        headerNavThrees: jobList.oneCover,
        // headerNavThrees: [
        //   {text: '不限'},
        //   {text: '其他类型'},
        //   {text: '建筑房产'},
        //   {text: '市场商务'},
        //   {text: '电子电气'},
        //   {text: '人事行政'},
        //   {text: '财政法务'},
        //   {text: '媒体设计'},
        //   {text: '教育咨询'},
        //   {text: '外语外贸'},
        //   {text: 'IT互联网'},
        //   {text: '机械制造'}
        // ],
        headerNavFours: [
          {text: '体育快消'},
          {text: '物流采购'},
          {text: '食品材料'},
          {text: '生物医疗'},
          {text: '能源环保'},
          {text: 'NGO公益'}
        ],
        headerNavFives: [
          {text: '不限'},
          {text: '医药'},
          {text: '医生'},
          {text: '生物'},
          {text: '护理'}
        ]
      }
    },
    methods:{
      addClass: function(index,which){
        switch (which){
          //头部
          case 'one': this.currentOne = index;
            !this.isOneCover ? this.isOneCover = !this.isOneCover : this.onShow === index ? this.isOneCover = !this.isOneCover : '';
            this.onShow = index; this.whichNav = which; break;
          case 'two': this.currentTwo = index;
            !this.isOneCover ? this.isOneCover = !this.isOneCover : this.onShow === index ? this.isOneCover = !this.isOneCover : '';
            this.onShow = index; this.whichNav = which; break;

          //第一层列表
          case 'three': this.currentThree = index;
            this.headerNavFours = jobList.oneCover[index].twoCover
            index === 0 ? this.isOneCover = !this.isOneCover:'';
            this.whichNav === 'one' ? this.headerNavOnes[this.onShow].text =  this.headerNavThrees[index].text : this.headerNavTwos[this.onShow].text =  this.headerNavThrees[index].text;
            this.isTwoCover ? this.isThreeCover = false : this.isTwoCover = true; break;

          //第二层列表
          case 'four' : this.isThreeCover = true;
            this.headerNavFives = jobList.oneCover[1].twoCover[index].threeCover
            break;

          //第三层列表
          case 'five': this.isOneCover = !this.isOneCover;
            this.whichNav === 'one' ? this.headerNavOnes[this.onShow].text =  this.headerNavFives[index].text : this.headerNavTwos[this.onShow].text =  this.headerNavFives[index].text; break;
        }
      }
    }
  }
</script>

<style lang="scss">
  .afterTriangle{
    &::after{
      content: '';
      width: 0; height: 0;
      border: .106667rem solid transparent;
      border-top-color: #999;
      position: absolute;
      bottom: .1rem;
      right: .15rem;
      transform: rotate(-45deg);
    }
  }
  .afterNone{
      &::after{
        display: none;
    }
  }
  .beforeBorder{
    &::before{
      content: '';
      position: absolute;
      width: .08rem;
      height: .64rem;
      top: .306667rem;
      left: 0;
      background: #ffd000;
    }
  }
  .job-selected{
    color: #333;
  }
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    min-height: 1.333333rem;
    color: #666;
    font-size: 0.4rem;
    background: #fff;
    .header-nav{
      width: 100%;
      // height: 1.32rem;
      overflow: hidden;
      border-bottom: 1px solid #f0f0f0;
      ul{
        width: 100%;
        height: 0;
        transition: height 0.2s linear;
        display: flex;
        overflow: hidden;
        li{
          width: 100%;
          text-align: center;
          line-height: 1.32rem;
          border-right: 1px solid #ccc;
          position: relative;
          @extend .afterTriangle
        }
        li.selected{
          @extend  .job-selected
        }
        li:last-child{
          width: 1rem;
          border-right: none;
          flex-shrink: 0;
          @extend .afterNone
        }
      }
      ul.show{
        height: 1.32rem;
      }
    }
    .header-filter{
      width: 100%;
      position: absolute;
      .filter-cover{
        width: 100%;
        height: 16.466667rem;
        background: rgba(0,0,0,0.7);
        display: none;
      }
      .filter-cover.oneCover{
        display: block;
      }
      ul{
        width: 0;
        height: 9.6rem;
        background: #fff;
        position: absolute;
        right: 0;
        top: 0;
        overflow: auto;
        border-left: 1px solid #eaeaea;
        transition: width .3s linear;
        li{
          height: 1.186667rem;
          padding-left: .533333rem;
          border-bottom: 1px solid #eaeaea;
          line-height: 1.186667rem;
          position: relative;
        }
        li.active{
          background: #fff;
          @extend .beforeBorder
        }
      }
      ul.one-list{
        display: none;
      }
      ul.one-list.oneCover{
        width: 100%;
        display: block;
        background: #f5f5f5;
        border: none;
      }
      ul.oneCover+ul.two-list.twoCover{
        width: 50%;
      }
      ul.oneCover+ul.two-list.threeCover{
        width: 66.6%;
      }
      ul.oneCover+ul.two-list.selected{
        color: #333;
      }
      ul.oneCover+ul.two-list.threeCover+ul.three-list.threeCover{
        width: 33.3%;
      }
    }
  }
</style>