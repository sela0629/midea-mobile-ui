<template>
  <!-- S  page -->
  <div class="page button">
    <div class="page__hd">
     <div class="page__title">
       按钮（Button）
     </div>
   </div>

   <!-- S  page__bd -->

   <div class="page__bd">
    <!-- 通用按钮 primary -->
    <a href="javascript:;" class="midea-btn midea-btn_primary">主操作按钮（Primary Normal）</a>

    <!-- 通用按钮 loading -->
    <a href="javascript:;" class="midea-btn midea-btn_primary midea-btn_loading">
    操作按钮（Loading）</a>

    <!-- 通用按钮 disabled -->
    <a href="javascript:;" class="midea-btn midea-btn_primary midea-btn_disabled">
    操作按钮（Disabled）
    </a>

    <!-- 次操作按钮 default -->
    <a href="javascript:;" class="midea-btn midea-btn_default">次操作按钮（Default Normal）</a>

    <!-- 次操作按钮 loading -->
    <a href="javascript:;" class="midea-btn midea-btn_default midea-btn_loading">次操作按钮（Loading）</a>

    <!-- 次操作按钮 disabled -->
    <a href="javascript:;" class="midea-btn midea-btn_default midea-btn_disabled">次操作按钮（Disabled）</a>

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
  .midea-btn{
    display: block;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    line-height: 2.56;
    border-radius: 5px;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    &_primary{
      background-color: $midea-blue; 
    }
    &_default{
      color: #000000;
      background-color: #F8F8F8;
      background: #F7F7F7;
    }

    &_disabled{
      color: rgba(255,255,255,.6);
      background: $disable-blue;
    }
    &_default.midea-btn_disabled{
      color: rgba(0,0,0,.6);
      background: #F7F7F7;
    }
    &_loading{
      &:before{

      }
    }
 &:after{
      content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    /*-webkit-transform: scale(0.5);
    transform: scale(0.5);*/
    @include transform(scale(.5));
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-radius: 10px;
    }
  }
  .midea-btn + .midea-btn{
    margin-top: 15px;
  }
</style>
