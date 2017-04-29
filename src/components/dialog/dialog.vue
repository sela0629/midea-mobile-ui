<template>
  <!-- S  page -->
  <div class="page dialog">
    <!-- <div class="page__hd"> -->
    
    <!-- </div> -->

    <!-- S  page__bd -->

    <div class="page__bd">
      <div class="midea-mask"></div>
      <div class="midea-dialog">
        <div class="midea-dialog__hd">
          <strong class="midea-dialog__title">弹窗标题</strong>
        </div>
        <div class="midea-dialog__bd">
          弹窗内容，告知当前状态、信息和解决方法。根据内容自动拉伸高度
        </div>
        <div class="midea-dialog__ft">
          <a href="javascript:;" class="midea-dialog__btn midea-dialog__btn_default">
            辅助操作
          </a>
          <a href="javascript:;" class="midea-dialog__btn midea-dialog__btn_primary">主操作</a>
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
