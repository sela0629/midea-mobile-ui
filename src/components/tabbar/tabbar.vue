<template>
  <!-- S  page -->
  <div class="page navbar">
    <!-- <div class="page__hd"> -->
    
    <!-- </div> -->

    <!-- S  page__bd -->

    <div class="page__bd" style="height:100%;">
      <div class="midea-tab">
        <div class="midea-tab__panel"></div>
        <div class="midea-tabbar">

          <!-- 通用 -->
          <a class="midea-tabbar__item" href="javascript:;">
            <span class="midea-tabbar__icon">
              <img src="../../img/icon_tabbar.png" alt="">
            </span>
            <p class="midea-tabbar__label">首页</p>
          </a>

          <!-- 通用 -->
          <a class="midea-tabbar__item" href="javascript:;">
            <span class="midea-tabbar__icon">
              <img src="../../img/icon_tabbar.png" alt="">
            </span>
            <p class="midea-tabbar__label">类目</p>
          </a>
          
          <!-- 有数量 -->
          <a class="midea-tabbar__item" href="javascript:;">
            <span class="midea-tabbar__icon">
              <img src="../../img/icon_tabbar.png" alt="">
              <span class="midea-badge">100</span>
            </span>
            <p class="midea-tabbar__label">购物车</p>
          </a>

          
          <!-- 小红点 -->
          <a class="midea-tabbar__item" href="javascript:;">
            <span class="midea-tabbar__icon">
              <img src="../../img/icon_tabbar.png" alt="">
              <span class="midea-badge midea-badge_dot"></span>
            </span>
            <p class="midea-tabbar__label">我的</p>
          </a>

          

        </div>
      </div>
      

    </div>

    <!-- E  page__bd -->
    <!-- E  page -->
  </div>

</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        msg: 'navbar demo',
        activeIndex: 1
      }
    },
    methods: {
      switchTab: function (e) {
        // e.target.dataset.index
        this.activeIndex = e.target.dataset.index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  @import "../../common/function";
  @import "../../common/var";
  .midea-tab{
    position: relative;
    height: 100%;
    &__panel{
      height: 100%;
      padding-bottom: 50px;
      overflow: auto;
      box-sizing: border-box;
    }
    .midea-tabbar{
      @include displayFlex();
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 500;
      &__item{
        @include flex(1);
        text-align: center;
        padding: 5px 0 0;
        font-size: 0;
      }
      &__label{
        font-size: 10px;
        text-align: center;
        line-height: 1.8;
        color: #999;
      }
      &__icon{
        display: inline-block;
        position: relative;
        img{
          display: inline-block;
          width: 27px;
          height: 27px;
        }
      }
      .midea-badge{
        top: -2px;
        right: -13px;
        position: absolute;
      }
      .midea-badge_dot{
        position: absolute;
        top: 0;
        right: -6px;
      }
      &:after{
        @include setLine($border-color);
      }
      
    }
  }
  .midea-badge{

    display: inline-block;
    min-width: 8px;
    border-radius: 18px;
    background-color: #f00;
    color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 1px 3px;
    vertical-align: middle;
    line-height: 1.2;

  }
  .midea-badge_dot{
    padding: 5px;
    min-width: 0
  }
</style>
