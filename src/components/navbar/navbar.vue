<template>
<!-- S  page -->
  <div class="page navbar">
    <!-- <div class="page__hd"> -->
      
    <!-- </div> -->

   <!-- S  page__bd -->

   <div class="page__bd">

      <div class="midea-tab">
        <div class="midea-navbar">
          <div v-bind:class="['midea-navbar__item',activeIndex == 1 ? 'midea-navbar__item_on' : '']" v-on:click="switchTab" data-index='1'>选项一</div>
          <div v-bind:class="['midea-navbar__item',activeIndex == 2 ? 'midea-navbar__item_on' : '']" v-on:click="switchTab" data-index='2'>选项二</div>
          <div v-bind:class="['midea-navbar__item',activeIndex == 3 ? 'midea-navbar__item_on' : '']" v-on:click="switchTab" data-index='3'>选项三</div>
          <div v-bind:class="['midea-navbar__item',activeIndex == 4 ? 'midea-navbar__item_on' : '']" v-on:click="switchTab" data-index='4'>选项四</div>
        </div>
        <div class="midea-tab__panel">
           <div style="text-align:center;margin-top:50px;" v-bind:class="[activeIndex == 1 ? 'show' : 'hide']">选项面板1</div>
           <div style="text-align:center;margin-top:50px;" v-bind:class="[activeIndex == 2 ? 'show'  : 'hide']">选项面板2</div>
           <div style="text-align:center;margin-top:50px;" v-bind:class="[activeIndex == 3 ? 'show'  : 'hide']">选项面板3</div>
                   <div style="text-align:center;margin-top:50px;" v-bind:class="[activeIndex == 4 ? 'show'  : 'hide']">选项面板4</div>
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
    .midea-navbar{
      @include displayFlex();
      position: relative;
      &__item{
        @include flex(1);
        padding: 13px 0;
        text-align: center;
        font-size: 15px;
        position: relative;
        &:after{
          @include setLine($border-color,'left');
        }
        &:first-child{
          &:after{
            display:none;
          }
        }
        &_on{
          background: #EAEAEA;
        }
      }
      &:after{
        @include setLine($border-color);
        top: auto;
        bottom: 0;
      }
    }
  }
</style>
