<template>
<!-- {{navbar.arrItems}} -->
      <div v-bind:class="['midea-tab',navbarData.diyClass]">
        <div class="midea-navbar">
          <div v-for="(item, index) in navbarData.arrItems" v-bind:class="['midea-navbar__item',activeIndex == (index+1)? 'midea-navbar__item_on' : '']" v-on:click="switchTab" v-bind:data-index='index+1'>{{item.navName}}</div>
        </div>
        <div class="midea-tab__panel">
           <div v-for="(item, index) in navbarData.arrItems"  style="text-align:center;margin-top:50px;" v-bind:class="[activeIndex == (index+1) ? 'show' : 'hide']" v-html="item.panelHtml"></div>
        </div>
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
    props: {
      navbarData: {
         required: false,
         default: function () {
           return {
          diyClass : 'dddd',
          arrItems : [
          {
          navName: '',
          panelHtml: ''
          },
          {
          navName: '',
          panelHtml: ''
          }
        ]
        }
         }
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
          left: -1px;
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
