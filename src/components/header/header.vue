<template>
<!-- S  page -->
  <div class="page header">
    <div class="page__hd">
    <header class="midea-header midea-header_fixed">
     <div class="midea-header__hd"></div> 
     <div class="midea-header__bd">固定在顶部</div> 
     <div class="midea-header__ft"></div>
   </header>
    </div>

   <!-- S  page__bd -->

   <!-- 普通样式，不含<图标；含<图标加个修饰符 midea-header_back(默认没有返回图标) 应该加在头部 -->
   <div class="page__bd">

     <header class="midea-header">
     <div class="midea-header__hd">返回</div> 
     <div class="midea-header__bd">标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，</div> 
     <div class="midea-header__ft"></div>
   </header>
   
    <!-- 有返回图标样式 -->
    <header class="midea-header midea-header_back">
     <div class="midea-header__hd">返回</div> 
     <div class="midea-header__bd">标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，</div> 
     <div class="midea-header__ft"></div>
   </header>

    <!-- 有返回图标样式+ft 编辑按钮 -->
    <header class="midea-header midea-header_back">
     <div class="midea-header__hd">返回</div> 
     <div class="midea-header__bd">标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，</div> 
     <div class="midea-header__ft">编辑</div>
   </header>

   <!-- 左侧无文字,仅图标+ft 编辑按钮 -->
    <header class="midea-header midea-header_back">
     <div class="midea-header__hd"></div> 
     <div class="midea-header__bd">左侧无文字,仅图标</div> 
     <div class="midea-header__ft">编辑</div>
   </header>

   <!-- 左侧无文字,无图标+ft 编辑按钮 -->
    <header class="midea-header">
     <div class="midea-header__hd"></div> 
     <div class="midea-header__bd">左侧无文字,仅图标</div> 
     <div class="midea-header__ft">编辑</div>
   </header>

   </div>

   <!-- E  page__bd -->

   </div>

   <!-- E  page -->
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: 'header demo'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  @import "../../common/function";
    @import "../../common/var";
  .midea-header{
    padding: 10px;
    position: relative;
    @include displayFlex();
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: white;
    color: #333;
    text-align: center;
    &:after{
      @include setLine($border-color);
      bottom: 0;
      top: auto;
    }
    &__hd{
      /*width: 50px;*/
       @include flex(.5);
       text-align: left;
       color: $midea-blue;
    }
    &__bd{
      @include flex(1);
      text-align: center;
      @include textOneLine();
    }
    &__ft{
      text-align: right;
      /*color: #999999;*/
      /*width: 50px;*/
      @include flex(.5);
    }
  }
  .midea-header_fixed{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1; 
  }
  /* 有返回图标 */
  .midea-header_back{
    .midea-header__hd{
      position: relative;
      /* < */
      &:before{
      content: ''; 
      @include setArrow(6px,$midea-blue,2px);
      transform: rotate(-138deg);
      margin-right: 5px;
    }
  }
  }
</style>
