<template>
  <!-- S  page -->
  <div class="page toast">
    <div class="page__hd">
      <div class="page__title">Toast</div>
      <div class="page__desc">弹出式提示</div>
    </div>

    <!-- S  page__bd -->

    <div class="page__bd">

      <!-- 通用按钮 primary -->
      <!-- <a href="javascript:;" v-on:click="pop(2)" class="midea-btn midea-btn_primary">Toast样式（成功）</a> -->

      <!-- 通用按钮 primary -->
      <a href="javascript:;" v-on:click="pop('loading')" class="midea-btn midea-btn_default">Toast样式（loading）</a>

      <!-- S toast -->
    <!-- midea loading, success
         midea-toast_loading midea-toast_success
       -->
       <div v-bind:class="['js_toast',(isShowToast == 1) ? '':'hide']">
        <div class="midea-mask_transparent"></div>
        <div class="midea-toast">
          <i v-bind:class="[objToast.toastType == 'loading' ? 'midea-loading ':'','midea-toast__icon']"></i>
          <p class="weui-toast__content">{{objToast.toastContent}}</p>
        </div>
      </div>
      <!-- E toast -->
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
        activeIndex: 1,
        isShowToast: 0,
        objToast: {
          toastType: 'loading', // success loading
          toastContent: '已完成'
        }
      }
    },
    methods: {
      pop: function (value) {
        // e.target.dataset.index
        console.log(value)
        this.isShowToast = 1
        this.objToast = {
          toastType: value, // success loading
          toastContent: '数据加载中'
        }
        let me = this // 需先赋值 否则setTimeout中取不到this
        setTimeout(function () {
          console.log('sss')
          me.isShowToast = 0
          console.log(me.isShowToast)
        }, 2000)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  @import "../../common/global";
  
  .midea-toast{
    position: fixed;
    z-index: 5000;
    width: 120px;
    min-height: 120px;
    left: 50%;
    top: 35%;
    @include transform(translate(-50%,-50%));
    background: rgba(17,17,17,.7);
    text-align: center;
    color: #fff;
    border-radius: 5px;
    position: relative;
    &__content{
      margin: 0 0 15px;
    }
    &__icon{
      width: 38px;
      height: 38px;
      vertical-align: baseline;
      margin: 30px 0 0;
      display: inline-block;
    }
  }
  .midea-mask_transparent{
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /*background: #ccc;*/
  }

</style>
