<template>
<header v-if="headerMode == 'diy'"
  v-bind:class="['midea-header',posMode?'midea-header_'+posMode:'',backMode?'midea-header_'+backMode:'']">
     <div class="midea-header__hd" @click="left.onClick" v-html="left.html"></div>
     <div class="midea-header__bd">{{title}} <slot></slot></div>
     <div class="midea-header__ft" @click="right.onClick" v-html="right.html"></div>

   </header>
<header v-else
  v-bind:class="['midea-header',posMode?'midea-header_'+posMode:'',backMode?'midea-header_'+backMode:'']">
     <div class="midea-header__hd" @click="back">{{backContent}}</div>
     <div class="midea-header__bd">{{title}} <slot></slot></div>
     <div class="midea-header__ft" @click="right.onClick">{{right.name}}</div>

   </header>
</template>

<script>
   export default {
     name: 'header',
     data () {
       return {
       }
     },
     props: {
      // diy 自定义左侧和右侧内容
       headerMode: {
         required: false,
         default: ''
       },
      // backContent 左侧返回内容文字
       backContent: {
         required: false,
         default: ''
       },
      // fix 是否固定在顶部
       posMode: {
         required: false,
         default: ''
       },
      // back 是否有返回图标
       backMode: {
         required: false,
         default: ''
       },
      // loading disabled
       title: {
         type: String, 
         default: ''
       },
       left: {
         required: false,
         default: function () {
           return {
             name: '',
             html: '',
             onClick () {
             }
           }
         }
       },
       right: {
         required: false,
         default: function () {
           return {
             name: '',
             html: '',
             onClick () {
             }
           }
         }
       }
     },
     methods: {
         back: function () {
           window.history.back()
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
