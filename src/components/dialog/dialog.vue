<template>
  <!-- 弹窗，一个页面使用一个弹窗，通过改变弹窗数据实现不同弹窗 -->
     <div v-bind:class="['js_dialog',isShowDialog ? '':'hide']">
       <div class="midea-mask"></div>
      <div class="midea-dialog">
        <div class="midea-dialog__hd">
          <strong class="midea-dialog__title">{{title}}</strong>
        </div>
        <div class="midea-dialog__bd">
          {{tip}}
        </div>
        <div class="midea-dialog__ft">
          <a v-for="item in arrButton" href="javascript:;" v-bind:class="['midea-dialog__btn','midea-dialog__btn_'+item.class]" @click="item.onClick">
           {{item.name}}
          </a>
        </div>
      </div>
     </div>

</template>

<script>
  export default {
    name: 'dialogTpl',
    data () {
      return {
      }
    },
    props: [
      'isShowDialog',
      'tip',
      'title',
      'arrButton'
    ],
    methods: {
      hidePop: function () {
        console.log('子組件')
        this.$emit('hidePop', 'ggg')
        console.dir(this.arrButton)
        // this.isShowDialog = 0
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
