<template>
  <!-- S  page -->
  <div class="page dialog">
    <div class="page__hd">
      <div class="page__title">Dialog</div>
    </div>

    <!-- S  page__bd -->

    <div class="page__bd">

    <!-- 通用按钮 primary -->
    <a href="javascript:;" v-on:click="pop(2)" class="midea-btn midea-btn_primary">Dialog样式（两个按钮）</a>

    <!-- 通用按钮 primary -->
    <a href="javascript:;" v-on:click="pop(1)" class="midea-btn midea-btn_default">Dialog样式（一个按钮）</a>

    <!-- 弹窗，一个页面使用一个弹窗，通过改变弹窗数据实现不同弹窗 -->
     <div v-bind:class="['js_dialog',isShowDialog ? '':'hide']">
       <div class="midea-mask"></div>
      <div class="midea-dialog">
        <div class="midea-dialog__hd">
          <strong class="midea-dialog__title">弹窗标题</strong>
        </div>
        <div class="midea-dialog__bd">
          弹窗内容，告知当前状态、信息和解决方法。根据内容自动拉伸高度
        </div>
        <div class="midea-dialog__ft">
          <a v-if="btnNum == 2" href="javascript:;" class="midea-dialog__btn midea-dialog__btn_default" v-on:click="hidePop()">
            辅助操作
          </a>
          <a href="javascript:;" class="midea-dialog__btn midea-dialog__btn_primary" v-on:click="hidePop()">主操作</a>
        </div>
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
        btnNum: 1,
        isShowDialog: 0
      }
    },
    methods: {
      pop: function (value) {
        // e.target.dataset.index
        this.btnNum = value
        this.isShowDialog = 1
      },
      hidePop: function () {
        this.isShowDialog = 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
   @import "../../common/global";
  .midea-mask{
    position: fixed;
    z-index: 1000;
    top : 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.6);

  }
  .midea-dialog{
    background: #fff;
    position: fixed;
    z-index: 5000;
    width: 80%;
    max-width: 300px;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    @include transform(translate(-50%,-50%));
    &__hd{
      padding: 15px 20px 10px 20px; 
      text-align: center;
      strong{
        font-weight: 400;
        font-size: 18px;
      }
    }
    &__bd{
      padding: 0 20px 10px 20px;
      font-size: 15px;
      color: #999;
      word-wrap: break-word;
      word-break: break-all;
    }
    &__ft{
      @include displayFlex();
      line-height: 48px;
      font-size: 18px;
      text-align: center;
      position: relative;
      .midea-dialog__btn{
        @include flex(1);
        display: block;
        text-decoration: none;
        color: #333;
        position: relative;
        &:after{
          @include setLine($border-color,'left'); 
        }
            &:first-child{
          &:after{
            display:none;
          }
        }
        &_primary{
          color: $midea-blue;
        }
      }

      &:after{
         @include setLine($border-color); 
      }
    }
  }
</style>
